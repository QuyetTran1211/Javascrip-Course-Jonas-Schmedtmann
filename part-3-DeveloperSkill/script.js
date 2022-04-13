// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temparature = [-2, -4, -10, 20 , 'error', 29, 35,40, 17, 11 ,22, 23];

const calculateTemparature = function(temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++){
        if(typeof temps[i] !== 'number') continue;
        if(temps[i] > max) max = temps[i];
        if(temps[i] < min) min = temps[i];
    }
    console.log(max, min);
}

calculateTemparature(temparature);


/// Coding challenger #1

// const arrTemp = [17, 21, 23];
const arrTemp = [12, -5, 5, 0, 4];

const printForecast = function(arr) {
    let text = '';
    for(let i = 0; i < arr.length; i++){
        text = text + ' ... ' + arr[i] + 'oC in ' + Number(i + 1) +' days';
    }
    console.log(text);
}

printForecast(arrTemp);