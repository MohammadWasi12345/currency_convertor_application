import inquirer from "inquirer";
let loop = true;
while (loop) {
    const currencyConvertor = await inquirer.prompt([{
            type: 'list',
            name: 'currencyInput',
            message: 'Select currency you want to convert',
            choices: ['pakistani rupee', 'saudi riyal', 'US dollar']
        },
        {
            type: 'number',
            name: 'amount',
            message: 'enter your amout'
        },
        {
            type: 'list',
            name: 'currencyOutput',
            message: 'Select currncy you want ',
            choices: ['pakistani rupee', 'saudi riyal', 'US dollar']
        }
    ]);
    const input = currencyConvertor.currencyInput;
    const money = currencyConvertor.amount;
    const output = currencyConvertor.currencyOutput;
    if (input === 'pakistani rupee') {
        if (output === 'US dollar') {
            console.log(`The ${money}Rs is equal to ${money / 281}$. `);
        }
        else if (output === 'saudi riyal') {
            console.log(`The ${money}Rs is equal to ${money / 75}riyal.`);
        }
    }
    else if (input === 'US dollar') {
        if (output === 'pakistani rupee') {
            console.log(`The ${money}$ is equal to ${money * 281}Rs. `);
        }
        else if (output === 'saudi riyal') {
            console.log(`The ${money}$ is equal to ${money * 3.75}riyal.`);
        }
    }
    else if (input === 'saudi riyal') {
        if (output === 'US dollar') {
            console.log(`The ${money}riyal is equal to ${money / 3.75}$. `);
        }
        else if (output === 'pakistani rupee') {
            console.log(`The ${money}riyal is equal to ${money * 75}Rs.`);
        }
    }
    const calculateAgain = await inquirer.prompt({
        type: 'confirm',
        name: 'calculateMore',
        message: 'do you want more conversion?',
        default: false
    });
    if (!calculateAgain.calculateMore) {
        loop = false;
    }
}
;
