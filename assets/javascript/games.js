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

    $("#targetNum").html('Heres a Number ');

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
        alert("You Won!");
        wins++;
        $("numberWins").text(wins);
        resetNum();
    }
    function loser() {
        alert("You Lose!");
        losses++;
        $("numberLosses").text(losses);
        resetNum();
    }
    function game() {
        resetNum()

        $("#number").on("click", function () {

        });

    }

    // Create a game function where # is set for each crystal
    for (var i = 0; i < 4; i++) {
        random = Math.floor(Math.random() * 10)+2;
        console.log(random);

        var button = $("<buttons>");
            button.attr({
                "class": 'gems',
                "data-value": random
            });    
        
        $("#ruby").val(random);
        $("#sapphire").val(random);
        $("#diamond").val(random);
        $("#emerald").val(random);
        
    };

    $('.gems').on("click", function () {
        console.log($(this))


        // $("#ruby" + (i + 1)).attr("data-value", numberOptions[i]);
        // yourScore = yourScore + ruby;
        // console.log("New yourScore " + yourScore);
        // $("#score").text(yourScore);

        if (yourScore === random) {
            win()
        }
        else if (yourScore > random) {
            lose()
        }



        // usernumber set
        // computer # set
        // display crystal value
        // $('#')
        // adds value of crystal to user#
        // win();
    })

    // run check function
    // if usernumber = computernumber "you win", then increase win by 1, then reset the game
    // else if usernumber is greater then the computernumber then "you lose", then increase loss by 1, then reset the game
    // game();
    resetNum()
});
