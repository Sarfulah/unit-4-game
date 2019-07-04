var wins = 0;
var losses = 0;
var yourScore = 0;

var ruby = document.getElementById("ruby");
var sapphire = document.getElementById("sapphire");
var diamond = document.getElementById("diamond");
var emerald = document.getElementById("emerald")


var counter = 0;

$(document).ready(function () {

    var randomNum

    function resetGame() {
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        diamond = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
    }

    function game() {
        resetGame()
        randomNum = Math.floor(Math.random() * (19 - 120)) + 1;
        // Create a game function where # is set for each crystal
        var numberOptions = [1, 4, 7, 11];
        for (var i = 0; i < numberOptions.length; i++) {
            numberOptions.push(i);
        }


        // usernumber set
        // computer # set
        $('#ruby').on("click", function () {
            // display crystal value
            $('#')
            // adds value of crystal to user#
            win();
        })
    }
    // run check function
    // if usernumber = computernumber "you win", then increase win by 1, then reset the game
    function win() {
        if (randomNum === yourScore) {
            alert("You Win!")
            wins++;
        } else if (yourScore >= randomNum) {
            alert("You Lose!")
            losses++;
        }
    }
    // else if usernumber is greater then the computernumber then "you lose", then increase loss by 1, then reset the game
    // game();
    resetGame()
})
