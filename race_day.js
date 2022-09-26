let raceNumber = Math.floor(Math.random() * 1000);

let checkEarly = false;

let runnerAge = 16;

if (runnerAge > 18 && checkEarly) {
  raceNumber += 1000;
}

if (runnerAge == 18) {
  console.log('You should see the registration desk.');
} else if (runnerAge > 18 && checkEarly) {
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && !checkEarly) {
  console.log(`You will race at 11am and your race number is ${raceNumber}`);
} else {
  console.log(`You will race at 12:30pm and your race number is ${raceNumber}`);
}
