/* We have two gumnastics team. The dolphins and the Koalas
Each team completes 3 times and then the average of the 3 scores is calculated
A team only win if it has at least double the average scor of the other team. Other wise, no team wins.
1. Creates an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'Checkwinner' that takes the average score of eachteam as parameters('avgDolphins' and 'avgKoalas') and then log the winner */

// const calcAverage = (score1, score2 ,score3) => (score1 + score2 + score3) / 3;
// // console.log(calcAverage(1,2,3));

// let scoreDolphins = calcAverage(900, 60 , 100);
// let scoreKoalas = calcAverage(80,23,45);

// function checkWinner (avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2* avgKoalas) {
//         console.log(`Dolphins win troophies ✨ (${avgDolphins} vs. ${avgKoalas})`);
//     } else if(avgKoalas >= 2* avgDolphins) {
//         console.log(`Koalas win troophies ✨ (${avgKoalas} vs. ${avgDolphins})`);
//     }else {
//         console.log(`No team wins`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// ///// Coding challenge #2

// const calcTip = function(bill) {
//     if (bill >= 50 && bill <= 300){
//         return bill * 0.15;
//     }else {
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);


// ///// small challenge


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     caclAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     hasDriver: function() {
//         if(this.hasDriversLicense){
//             return this.hasDriver = 'a';
//         }else {
//             return this.hasDriver = 'no';
//         }
//     }
// }

// console.log(`${jonas.firstName} is a ${jonas.caclAge()}-year old teacher, and he has ${jonas.hasDriver()} driver's license`);

// //// Coding Challenge 3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName} is higher BMI (${mark.BMI}) than ${john.fullName} BMI (${john.BMI}))`);
// }else {
//     console.log(`${john.fullName} is higher BMI (${john.BMI}) than ${mark.fullName} BMI (${mark.BMI}))`);
// }

///// Coding challenge 4


let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }else {
        return bill * 0.2;
    }
}

for (let i = 0; i < bills.length; i++ ){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);
// Bonus questions

const calcAverage = function(arr){
   let sum = 0;
   for(let i = 0; i < arr.length; i++) {
       sum = sum + arr[i];
   }
   return sum / arr.length;
}

console.log(calcAverage(tips));
console.log(calcAverage(bills));


