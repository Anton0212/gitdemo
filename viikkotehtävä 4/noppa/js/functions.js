
var dice = document.getElementById("dice");


dice.addEventListener("click", function() {
   
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
    
    var diceImage = document.getElementById("diceImage");
    
   
    diceImage.src = "" + randomNumber + "dice.five.png"; 
});
