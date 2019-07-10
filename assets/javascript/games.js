$(document).ready(function () {

    var random = Math.floor(Math.random() * 19 + 102);

    
    var wins = 0;
    var losses = 0;
    var yourScore = 0;
    var ruby = document.getElementById("ruby");
    var sapphire = document.getElementById("sapphire");
    var diamond = document.getElementById("diamond");
    var emerald = document.getElementById("emerald");
    
    $("#wins-num").text(wins);
    $("#losses-num").text(losses);
    $("#targetNum").html('Heres a Number ');
    
    function resetNum() {
        
        random = Math.floor(Math.random() * 19 + 102);
        console.log(random);
        $("#hereNumber").text(random);
        
        
        ruby = Math.floor(Math.random() * 12) + 1;
        $("#ruby").attr("data-value", ruby);
        sapphire = Math.floor(Math.random() * 12) + 1;
        $("#sapphire").attr("data-value", sapphire);
        diamond = Math.floor(Math.random() * 12) + 1;
        $("#diamond").attr("data-value", diamond);
        emerald = Math.floor(Math.random() * 12) + 1;
        $("#emerald").attr("data-value", emerald);
        yourScore = 0;
        $("#yourScore").text(yourScore);
    }

    function win() {
        alert("You Won!");
        wins++;
        $("#wins-num").text(wins);
        resetNum();
    }
    function lose() {
        alert("You Lose!");
        losses++;
        $("#losses-num").text(losses);
        resetNum();
    }
    
    $(".gems").on("click", function () {
        var crystalValue = ($(this).attr("data-value"));
        console.log(crystalValue)
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue)
        yourScore += crystalValue;

        $("#yourScore").text(yourScore);

        if (yourScore === random) {
            win()
        }
        else if (yourScore > random) {
            lose()
        }

    })

    resetNum()
});
