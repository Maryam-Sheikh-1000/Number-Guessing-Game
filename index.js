#! /usr/bin/env node
import inquirer from "inquirer";
async function startFunc() {
    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter your number between 1-10:"
        }
    ]);
    const { userGuess } = userNum;
    console.log("Your Guess: ", userGuess, "\nSystem's Guess: ", systemNum);
    if (userGuess === systemNum) {
        console.log("Your Guess Is Correct \nYou Won!");
    }
    else {
        console.log("Better Luck Next Time");
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do You Want to Continue? Press Y or N"
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes");
}
startAgain();
