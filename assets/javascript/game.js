

$(document).ready(function(){


    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;
    var randomNumber = 0;
    var crystalNumbers = [];
    var crystalNumberArray = [1,2,3,4,5,6,7,8,9,10,11,12]
    var result = 0;
    var winCounter = 0;
    var lossCounter = 0;
    


// picks the main number to be guessed
function guessNumber() {
    return Math.floor(Math.random() * 102) + 19;
  }

// picks the random number for the crystal
function crystalNumber () {
    return Math.floor(Math.random() * 12) + 1;
}

gameStart();

// game start

function gameStart() {

    randomNumber = guessNumber();
    console.log(randomNumber);
    // Generates the random #s 1-12 for each crystal with no repeat numbers
    for (var i = 0; i < 4; i++) {
        var j = crystalNumberArray[Math.floor(Math.random() * crystalNumberArray.length)];
        crystalNumbers.push(j);
        crystalNumberArray.splice($.inArray(j,crystalNumberArray), 1);
        // console.log(crystalNumberArray);
        // console.log(crystalNumbers);
        
    } 
        crystalOne = crystalNumbers[0];
        crystalTwo = crystalNumbers[1];
        crystalThree = crystalNumbers[2];
        crystalFour = crystalNumbers[3];
        $(".random-number").text(randomNumber);
        $("#crystalOne").val(crystalOne);
        $("#crystalTwo").val(crystalTwo);
        $("#crystalThree").val(crystalThree);
        $("#crystalFour").val(crystalFour);
        // console.log(crystalOne);
        // console.log(crystalTwo);
        // console.log(crystalThree);
        // console.log(crystalFour);   
}



// game play



$(".crystal").on("click", function(){
    result += parseInt($(this).val());
    $(".total-score").text(result);
    winLose();
})


// game reset

function gameReset () {

    crystalOne = 0;
    crystalTwo = 0;
    crystalThree = 0;
    crystalFour = 0;
    randomNumber = 0;
    crystalNumbers = [];
    crystalNumberArray = [1,2,3,4,5,6,7,8,9,10,11,12]
    result=0

    $(".random-number, .total-score").empty();

    gameStart();
}

// game win or lose

function winLose() {

    if (result === randomNumber) {
        winCounter ++;
        $(".wins").text(winCounter);
        gameReset();
    }

    if (result > randomNumber) {
        lossCounter ++;
        $(".losses").text(winCounter);
        gameReset();
    }
}

});