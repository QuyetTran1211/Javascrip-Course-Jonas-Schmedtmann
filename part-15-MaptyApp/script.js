'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.type = 'running';
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.type = 'cycling';
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);

// console.log(run1, cycling1);
///////////////////////////////////////////////////
// ----------APPLICATION ARCHITECTURE-------------
///////////////////////////////////////////////////

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const clearAllBtn = document.querySelector('.sidebar__btn--clearAll');
const sortDistanceBtn = document.querySelector('.sidebar__btn--sortDistance');
const sortTimeBtn = document.querySelector('.sidebar__btn--sortTime');
const cancelBtn = document.querySelector('.form__btn--cancel');
// --------------- Main App ----------------
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  #layers = [];
  #sortedByDistance = false;
  #sortedByTime = false;

  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    clearAllBtn.addEventListener('click', this.reset);
    sortDistanceBtn.addEventListener('click', () => {
      this._sort('distance', !this.#sortedByDistance);
      this.#sortedByDistance = !this.#sortedByDistance;
    });
    sortTimeBtn.addEventListener('click', () => {
      this._sort('time', !this.#sortedByTime);
      this.#sortedByTime = !this.#sortedByTime;
    });
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    // console.log(position);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //------- Handling clicks on map------------
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => Number(inp) > 0);

    e.preventDefault();

    // -----------Get data from form-----------
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // -----------Check if data is valid-----------
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // ----------If workout cycling, create cyling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert('Inputs have to be positive numbers');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    //----------- Add new object to workout array
    this.#workouts.push(workout);

    // console.log(workout);
    //----------- Render workout on map as marker
    this._renderWorkoutMarker(workout);
    // ----------Reder workout on list
    this._renderWorkout(workout);
    // ----------Hide form --Clear input field
    this._hideForm();

    //--------- Set local Storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description} `
      )
      .openPopup();
    // this.#layers.push(layer);
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
    </div>
    `;

    if (workout.type === 'running')
      html += `<div class="workout__details">
                  <span class="workout__icon">⚡️</span>
                  <span class="workout__value">${workout.pace.toFixed(1)}</span>
                  <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                  <span class="workout__icon">👣</span>
                  <span class="workout__value">${workout.cadence}</span>
                  <span class="workout__unit">spm</span>
                </div>
                <div class="workout__control">
                  <button class="workout__btn workout__btn--clear">🗑 Clear</button>
                  <button class="workout__btn workout__btn--edit">📝 Edit</button>
                </div>
              </li>`;

    if (workout.type === 'cycling')
      html += `
                <div class="workout__details">
                  <span class="workout__icon">⚡️</span>
                  <span class="workout__value">${workout.speed.toFixed(
                    1
                  )}</span>
                  <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                  <span class="workout__icon">🏔️</span>
                  <span class="workout__value">${workout.elevationGain}</span>
                  <span class="workout__unit">m</span>
                </div>
                <div class="workout__control">
                  <button class="workout__btn workout__btn--clear">🗑 Clear</button>
                  <button class="workout__btn workout__btn--edit">📝 Edit</button>
                </div>
              </li>`;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    let index = 0;

    const workout = this.#workouts.find((work, i) => {
      index = i;
      return work.id === workoutEl.dataset.id;
    });
    // console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    //------------- delete workout and reload--------
    if (e.target.classList.contains('workout__btn--clear')) {
      this.#workouts.splice(index, 1);
      this._setLocalStorage();
      location.reload();
    }

    // --------------Edit workout--------------
    if (e.target.classList.contains('workout__btn--edit')) {
      // Delete old workout
      this.#workouts.splice(index, 1);

      // Show form with our coords
      this.#mapEvent = {
        latlng: {
          lat: workout.coords[0],
          lng: workout.coords[1],
        },
      };
      this._showForm(this.#mapEvent);
      this._updateUI();
    }

    // using the public interface
    // workout.click();
  }

  _updateUI() {
    containerWorkouts
      .querySelectorAll('.workout')
      .forEach(work => work.remove());
    this.#layers.forEach(layer => {
      layer.remove();
    });
    this.#layers = [];

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
      this._renderWorkoutMarker(work);
    });
  }

  _sort(key, sort) {
    containerWorkouts
      .querySelectorAll('.workout')
      .forEach(work => work.remove());

    if (key === 'distance') {
      const workouts = sort
        ? this.#workouts.slice().sort((a, b) => a.distance - b.distance)
        : this.#workouts;
      workouts.forEach(work => this._renderWorkout(work));
    }

    if (key === 'time') {
      const workouts = sort
        ? this.#workouts.slice().sort((a, b) => a.duration - b.duration)
        : this.#workouts;
      workouts.forEach(work => this._renderWorkout(work));
    }
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    // console.log(data);

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
