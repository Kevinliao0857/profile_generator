const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  rl.question("What's your name? Nicknames are also acceptable :) ", (personsName) => {
    rl.question("What's an activity you like doing? ", (activity) => {
      rl.question("What do you listen to while doing that? ", (music) => {
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
          rl.question("What's your favourite thing to eat for that meal? ", (favFood) => {
            rl.question("Which sport is your absolute favourite? ", (sport) => {
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {
                console.log(`${personsName} thinks Node.js is ${answer}, likes ${activity} and listens to ${music} while ${activity}. Loves ${meal} and eat's a lot of ${favFood}, and plays ${sport} afterwards. They secretly have ${superPower} abilities.`);
                rl.close()
              });
            });
          });
        });
      });
    });
  });
});
















