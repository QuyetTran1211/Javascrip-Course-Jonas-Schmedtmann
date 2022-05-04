'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced objec literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   oderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// //---------------- With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // ---------------------Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //-------------------------- Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //----------------------Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

// // -------------- Properties Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} day: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day},`;
// }

// console.log(openStr);

// // ------------- Properties values

// const values = Object.values(openingHours);

// Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.fri.open);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(menu);

// // Iterables : arrays, string, maps, sets. Not objects

// ********************************************************

// Coding Challenge #1, #2

// // Create one player array for eachteam

// const player1 = [...game.players[0]];
// const player2 = [...game.players[1]];
// console.log(player1);
// console.log(player2);

// // const [gk, fieldPlayer] = player1;
// // console.log(gk, fieldPlayer);

// const gk = player1[0] + ' and ' + player2[0];
// console.log(gk);
// const [, ...fieldPlayer] = player1;
// console.log(fieldPlayer);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const players1Final = [...player1, 'Thiago', 'Coutiho', 'Perisic'];

// console.log(players1Final);

// // const { ...odd } = game.odds;
// // // console.log(odd);

// // let eachOdd = Object.values(odd);
// // // console.log(eachOdd);

// // let team1 = eachOdd[0];
// // console.log(team1);

// // let draw = eachOdd[1];
// // console.log(draw);

// // let team2 = eachOdd[2];
// // console.log(team2);

// // 5.

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// printGoals(...game.scored);

// // 7.

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrusia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Matinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // ---1. Loop over the game.scored array and print each playler name to the console, along with the goal number (ex: Goal1 : Lewandowski)

// const goals = [...game.scored];

// for (const [goal, name] of goals.entries()) {
//   console.log(`Goal${goal + 1} : ${name}`);
// }

// // ---2 Use loop to calculate the average odd and log it to the console
// const odds = Object.values(game.odds);
// let average = 0;

// for (const odd of odds) average += odd;
// average /= odds.length;

// console.log(average);

// // ---3 Print the 3 odds to the console, but in a nice formatted way, exactly like this :
// //  Odd of bayernMunich : 1.33

// // const entries = Object.entries(openingHours);

// // for (const [day, { open, close }] of entries) {
// //   console.log(`On ${day} we open at ${open} and close at ${close}`);
// // }
// const entries = Object.entries(game.odds);
// // console.log(entries);

// for (const [team, odd] of entries) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

//------------------------------------------ Set

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// console.log(orderSet);

// // Example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// //--------------------------------------  Map

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Listbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 24;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// const question = new Map([
//   ['question', 'What is the best progamming language in the worlds ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct ❤️'],
//   [false, 'Try again'],
// ]);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, val] of question) {
//   if (typeof key === 'number') console.log(`Answer is ${key}: ${val}`);
// }

// const answer = Number(prompt('Your answer! '));

// console.log(question.get(question.get('correct') === answer));

// // --------------- Conver Map to Array

// console.log(...question);

// Coding Challenge #3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Diffenrent game different values
// const differentGames = [...gameEvents.values()];

// console.log(differentGames);

// const events = new Set(differentGames);

// console.log(events);

// // 2. Delete yellow card at 64 min

// gameEvents.delete(64);

// console.log(gameEvents);

// // 3 Event average on ? minutes
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4 divide game to half and second sec

// for (const [minutes, event] of gameEvents) {
//   const half = minutes <= 45 ? 'First' : 'Second';
//   console.log(`[${half} Half] ${minutes}: ${event}`);
// }

// ******************************************
// ------------------- Working with String
// ******************************************

// const airline = 'tap air portuggal';

// const plane = 'a320';

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😊');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const airline = 'tap air portuggal';

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// Fix capitalization in name

// const passenger = 'jOnAs';

// const passengerCorrect = passenger[0].toUpperCase() + passenger.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@jonas.io';
// const loginEmail = 'Hello@Jonas.io \n ';

// const nomalizedEmail = loginEmail.toLowerCase().trim();

// console.log(nomalizedEmail);

// replacing

// const priceGB = '288.97$';
// const priceVN = priceGB.replace('$', 'VND');

// const announcement = 'All passenger come to barding door 23. Boarding door 23';

// console.log(announcement.replace('door'), 'gate');

// const checkGagge = function (item) {
//   const gagge = item.toLowerCase();
//   if (gagge.includes('knife') || gagge.includes('gun')) {
//     console.log('Youre not allow to aboard. Sr 😥');
//   } else {
//     console.log('You are welcome to allow aboard ❤️');
//   }
// };

// checkGagge('I have a pocket of knife and some candy');
// checkGagge('Socks and camera');
// checkGagge('Got some snacks and a gun for protections');

// //-----------------------Split and Join

// const [firstName, lastName] = 'Jonas Schmedmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join('');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = [];
//   for (const n of names) {
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameUpper.join(' '));
// };

// capitalizeName('jessica and smith davis');
// capitalizeName('jonas schmedmann');

// --------------------------Padding

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Jonas'.padStart(23, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(1249861287496518724));
// maskCreditCard('3237986527389056234');

// // Repeat method

// const message2 = 'Bad weather... All Departures Delayed \n';

// console.log(message2.repeat(3));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'} \n`.repeat(n));
// };

// planesInLine(5);

// ######## Coding Challenge #4 #################

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   // console.log(text);
//   const rows = text.split('\n');
//   // console.log(rows);
//   for (const row of rows) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     // console.log(first, second);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;

//     console.log(output);
//   }
// });

// *********************String Method Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} ${time.replace(
    ':',
    'h'
  )}`.padStart(43);
  console.log(output);
}
