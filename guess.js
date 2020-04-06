

var intMax, intMin, intRandom, intGuess, intCount; /*declaring variables*/

intMin = parseInt(prompt("Choose the lowest number (but no lower than zero) in your guessing game: ")); /*This section of code prompts the user for the lowest number of the game as well as validates the minimum number*/
while (isNaN(intMin) || intMin<0)
{
    intMin = parseInt(prompt("I'm sorry but your lowest number choice was invalid. \n Choose the lowest number (but no lower than zero) in your guessing game: "));
}

intMax = parseInt(prompt("Choose the highest number (must be at least two more than the lowest number) in your guessing game: ")); /*This section of code prompts the user for the highest number of the game as well as validates the maximum number*/
while (isNaN(intMax) || intMax <= intMin+2)
{
    intMax = parseInt(prompt("I'm sorry but your highest number choice was invalid. \n Choose the highest number (must be at least two more than the lowest number) in your guessing game: "));
}

intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin); /*this line generates the random number the user is attempting to guess*/


intGuess = parseInt(prompt("Enter your guess between " + intMin + " and " + intMax + "; ")); /*This section prompts the user for their guess and validates that the guess is a number between the min and the max*/
while (intGuess<intMin || intGuess>intMax || isNaN(intGuess))
{
    intGuess = parseInt(prompt("Sorry, your guess is invalid. Please enter your guess between " + intMin + " and " + intMax + ": "));
}


intCount = 1; /*this line begins keeping track of how many guesses the user has had before the get the correct number*/
while (intGuess!= intRandom)
{
    if (intGuess < intRandom) /*this statement addresses the user when their guess is too low*/
    {
        intGuess = parseInt(prompt("Your guess " + intGuess + " is too low. Guess again!")); /*the statement here prompts the user to guess a higher number*/
        while (intGuess<intMin || intGuess>intMax || isNaN(intGuess)) /*this statement and the one below revalidate the users guess*/
        {
        intGuess = parseInt(prompt("Sorry, your guess is invalid. Please enter your guess between " + intMin + " and " + intMax + ": "));
        }
    }
    else /* this statement addresses the user when their guess is too high*/
    {
        intGuess = parseInt(prompt("Your guess " + intGuess + " is too high. Guess again!")); /*the statement here prompts the user to guess lower number*/
        while (intGuess<intMin || intGuess>intMax || isNaN(intGuess)) /*this statement and the one below revalidate the users guess*/
        {
        intGuess = parseInt(prompt("Sorry, your guess is invalid. Please enter your guess between " + intMin + " and " + intMax + ": "));
        }
    }
    intCount++; /*this line icrements the count to keep track of how many guesses the user has had*/
}

alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!"); /*This line alerts the user that they have guessed correctly and completed the game*/

