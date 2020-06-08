//Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope',
};

const declareMurderer = function () {
  return `The murderer is ${scenario.murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict); // 'The murderer is Miss Scarlet.'
//const object scenario is defined outside the function

//Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function () {
  murderer = 'Mrs. Peacock';
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer(); // with throw an error as const cannot be reassigned
const verdict = declareMurderer();
console.log(verdict); // 'The murderer is Profesor Plum.'

// //Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function () {
  let murderer = 'Mrs. Peacock'; //defined within a scope accessible by declareMurderer function
  return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict); //'The murderer is Mrs. Peacock.'

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);// 'The murderer is Profesor Plum.'

// //Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';// reassigned in declareAllSuspects function

const declareAllSuspects = function () {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);// 'The suspects are Miss Scarlet, Profesor Plum, Colonel Mustarts.'
console.log(`Suspect three is ${suspectThree}.`); // 'Suspect three is Mrs. Peacock.'

// //Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick',
};

const changeWeapon = function (newWeapon) {
  scenario.weapon = newWeapon; // allows mutations of const scenario
};

const declareWeapon = function () {
  return `The weapon is the ${scenario.weapon}.`; // 'The weapon is Candle Stick.'
};

changeWeapon('Revolver'); // weapon changed to Revolver
const verdict = declareWeapon();
console.log(verdict); // 'The weapon is Revolver.'

//
//Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function () {
  murderer = 'Mr. Green'; // declared in global scope

  const plotTwist = function () {
    murderer = 'Mrs. White';// declared in a global scope
  };

  plotTwist();
}; // end of changeMurderer function

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict); //'The murderer is Mrs. White'

//Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function () {
  murderer = 'Mr. Green';// changes global variable

  const plotTwist = function () {
    let murderer = 'Colonel Mustard'; // doesnt change

    const unexpectedOutcome = function () {
      murderer = 'Miss Scarlet';
    };

    unexpectedOutcome();
  }; // end of plotTwist function

  plotTwist();
}; // end of changeMurderer function

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict); // I am not sure...

//Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe',
};

const changeScenario = function () {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room'; //changes room

  const plotTwist = function (room) {
    if (scenario.room === room) { // plotTwist('Dining room') changes murderer to Colonel Mustard
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function (murderer) {
      if (scenario.murderer === murderer) {//chnages weapon to Candle stick as murderer is Colonel now
        scenario.weapon = 'Candle Stick';
      }
    }; // end of unexpectedOutcome function

    unexpectedOutcome('Colonel Mustard');
  }; // end of plotTwist function

  plotTwist('Dining Room');
};// end of changeScenario function

const declareWeapon = function () {
  return `The weapon is ${scenario.weapon}.`;
};

changeScenario();
const verdict = declareWeapon();
console.log(verdict);// 'The weapon is Candle stick.'

// //Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}// reassigned but not used

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);// 'The murderer is Professor Plum'
