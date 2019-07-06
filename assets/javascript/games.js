$(document).ready(function () {

    var random = Math.floor(Math.random() * 19 + 102);

    $("targetNum").text(random);
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    var wins = 0;
    var losses = 0;
    var yourScore = 0;
    var ruby = document.getElementById("ruby");
    var sapphire = document.getElementById("sapphire");
    var diamond = document.getElementById("diamond");
    var emerald = document.getElementById("emerald");

    function resetNum() {

        random = Math.floor(Math.random() * 19 + 102);
        console.log(random);

        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        diamond = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
        yourScore = 0;
        $("#score").text(yourScore);
    }

    function win() {
        if (random === yourScore) {
            alert("You Win!");
            wins++;
            $("numberWins").text(wins);
            resetNum();
        } else if (yourScore >= random) {
            alert("You Lose!");
            losses++;
            $("numberLosses").text(losses);
            resetNum();
        }
    }
    function game() {
        resetNum()

        $("#number").on("click", function () {

        });

        // Create a game function where # is set for each crystal
    }
    function gemValues(numberOptions) {
        var numberOptions = [1, 4, 7, 11];
        for (var i = 0; i < numberOptions.length; i++) {
            numberOptions.push(i);
        }
        $("#ruby" + (i + 1)).attr("data-value", numberOptions[i]);
        console.log(this);

    }

    // usernumber set
    // computer # set
    $('#ruby').on("click", function () {
        // display crystal value
        // $('#')
        // adds value of crystal to user#
        win();
    })

    // run check function
    // if usernumber = computernumber "you win", then increase win by 1, then reset the game
    // else if usernumber is greater then the computernumber then "you lose", then increase loss by 1, then reset the game
    // game();
    resetNum()
});
