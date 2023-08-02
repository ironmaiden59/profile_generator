// Profile Generator

const readline = require('readline');


const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
   });

   rl.question('Whats your name? \n', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question('Whats an activity you like doing? \n', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
    
      rl.question('What do you listen to while doing that? \n', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
    
        rl.question('Which meal is your favourite \n', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question('Whats your favourite thing to eat for that meal? \n', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question('Which sport is your absolute favourite? \n', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);

              rl.question('What is your superpower? \n', (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);

      
                rl.close(); 
              })

              })

              })
  
              })

 
      })

    }) 
     

});
  
