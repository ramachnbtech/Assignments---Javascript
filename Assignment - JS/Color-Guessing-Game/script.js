var colors = ["blue", "cyan", "gold", "gray", "green", "yellow", "magenta", "red", "pink", "black", "orange", "violet", "aqua"];
var target;
var count = 0;
var finished = false;
var guess_input;

function do_game() {
    colors.sort();
    target = Math.floor(Math.random() * colors.length);
    do {
        guess_input = prompt(
            "I am thinking of one of these colors\n\n" + colors +
            "\n\nWhat color am I thinking of?"
        )
        count++;
    } while (check_guess());
}

function check_guess() {
    var idx = colors.indexOf(guess_input);
    if (idx < 0)
        alert("Sorry, I dont't recognize that color! \n\nPlease try again!");
    else if (idx > target)
        alert("Sorry, Your guess is not correct! \n\nHint : Your color is alphabetically higher than mine. \n\nPlease try again");
    else if (idx < target)
        alert("Sorry, Your guess is not correct! \n\nHint : Your color is alphabetically lower than mine. \n\nPlease try again");
    else {
        elem_body = document.getElementsByTagName("body")[0];
        elem_body.style.background = colors[target];
        alert("Congratulations! You are right! \n\nYou took " + count + " guesses to finish the game! \n\nYou can see the color oin the background!");
        return false;
    }
    return true;
}