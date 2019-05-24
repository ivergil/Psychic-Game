var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var losses = 0;
var wins = 0;
var left = 9;
var choice = [];

var r = Math.floor((Math.random() * 26) + 1);
// document.write(abc[r]);

document.onkeyup = function(event){
    var random = abc[r];
    var letter = event.key.toLowerCase();
    var doble = false;

    if(letter == random) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        left = 9;
        document.getElementById("left").innerHTML = "Guesses left: " + left;
        choice = [];
        document.getElementById("choice").innerHTML = "Your guesses so far: ";
        r = Math.floor((Math.random() * 26) + 1);
        // console.log(abc[r]);
    }
    else {
        
        for(var i = 0; i < choice.length; i++){
            if(letter == choice[i]){
                doble = true;
                break;  
            }
        }
    }    
    if(!doble && letter !== random ){    
        left--;
        document.getElementById("left").innerHTML = "Guesses left: " + left;
        choice.push(letter);
        document.getElementById("choice").innerHTML += " " + letter;
    }
    if(left == 0){
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        left = 9;
        document.getElementById("left").innerHTML = "Guesses left: " + left;
        choice = [];
        document.getElementById("choice").innerHTML = "Your guesses so far: ";
        r = Math.floor((Math.random() * 26) + 1);
        // console.log(abc[r]);
    }
}

var resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click",function(){

    wins = 0;
    losses = 0;
    left = 9;
    choice = [];
    document.getElementById("wins").innerHTML = "Wins: ";
    document.getElementById("losses").innerHTML = "Losses: ";
    document.getElementById("left").innerHTML = "Guesses left: " + left;
    document.getElementById("choice").innerHTML = "Your guesses so far: ";
    
});
// $(document).ready(function() {

//     $("#reset").on("click", function() {
//         alert("I've been clicked!");
//       });

// });