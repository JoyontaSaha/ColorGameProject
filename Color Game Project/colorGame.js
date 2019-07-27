var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  //picks colors, sets up squares
  reset();
}

function setupModeButtons(){
  //mode buttons event listeners
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      
      //terniary shortcut for if/else statement
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

      reset();
      //figure out how many squares to show
      //pick new colors
      //pick a new pickedColor
      //update page to reflect changes
    });
  }
}

function setupSquares(){
  //set up square listeners
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = pickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of color array
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];  
    } else { 
      squares[i].style.display = "none";
    }
    
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
  //change each color to match given color
}

function pickColor(){
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return arr
  return arr;
}

function randomColor(){
  //pick a "red" from 0 - 255, then green, then blue
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  //the spaces in the string are necessary because CSS returns colors in the format rgb(x, x, x);
  return "rgb(" + r + ", " + g + ", " + b + ")";

  
}













//Practice

// var numSquares = 6;
// var colors = generateRandomColors(6);
// var squares = document.querySelectorAll(".square");
// var pickedColor = pickColor();  
// var colorDisplay = document.getElementById("colorDisplay");
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var resetButton = document.querySelector("#reset");
// var easybtn = document.querySelector("#easybtn");
// var hardbtn = document.querySelector("#hardbtn");

// easybtn.addEventListener("click", function(){
//   easybtn.classList.add("selected");
//   hardbtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
//   }
// });
// hardbtn.addEventListener("click", function(){
//   hardbtn.classList.add("selected");
//   easybtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//   }

// })

// resetButton.addEventListener("click", function(){
//   //generate all new colors
//   colors = generateRandomColors(numSquares);
//   //click a random new color from array
//   pickedColor = pickColor();
//   //arrange colorDisplay to match picked color
//   colorDisplay.textContent = pickedColor;
//   //arrange colors of square
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.background = colors[i];
//   }
//   resetButton.textContent = "New Colors";
//   h1.style.background = "steelblue";
//   messageDisplay.textContent = ""; 
// })

// colorDisplay.textContent = pickedColor;

// for(var i = 0; i < squares.length; i++){
//   //add initial colors to squares
//   squares[i].style.background = colors[i];

//   //add click listeners to squares
//   squares[i].addEventListener("click", function(){
//     //grab color of clicked square
//     var clickedColor = this.style.background;

//     if(clickedColor === pickedColor){
//       messageDisplay.textContent = "Correct";
//       changeColors(clickedColor);
//       h1.style.background = clickedColor; 
//       resetButton.textContent = "Play Again?";
//     }
//     else{
//       this.style.background = "#232323"; 
//       messageDisplay.textContent = "Try Again";
//     }
//   });
// }

// function changeColors(color){
//   //loop through all squares
//   for(var i = 0; i < squares.length; i++){
//     //change each color to match given color
//     squares[i].style.background = color;
//   }
  
// }

// function pickColor(){
//   var random = Math.floor(Math.random() * colors.length);
//   return colors[random];
// }

// function generateRandomColors(num){
//   //make an array
//   var arr = [];
//   //repeat num times
//   for(var i = 0; i < num; i++){
//     //get random color and push into arr
//     arr.push(randomColor());

//   }
//   //return that array
//   return arr;
// }

// function randomColor(){
//   //pick a "red" from 0-255
//   var r = Math.floor(Math.random()*256);
//   //pick a "green" from 0-255
//   var g = Math.floor(Math.random()*256);
//   //pick a "blue" from 0-255
//   var b = Math.floor(Math.random()*256);

//   return "rgb(" + r + ", " + g + ", " + b + ")";
// }