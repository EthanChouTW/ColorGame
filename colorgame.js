
var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeBtn.length; i++) {
  modeBtn[i].addEventListener("click", function() {
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "EASY" ? numberOfSquares = 3: numberOfSquares = 6;
    reset();
  })
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {

  // add click listenders to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked square
    var clickedColor = this.style.background

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "correct!";
      resetButton.textContent = "Play again";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "TRY again";
    }
  })
}
}

function reset() {
// generate all new colors
  colors = generateRandomColors(numberOfSquares);
  //pick a new random color from array
  pickedColor = pickColor()
  //changecolordisplay to match picked colr;
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";

  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {

  reset();

})

colorDisplay.textContent = pickedColor;



function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length );
  return colors[random];
}


function generateRandomColors (num) {
 // make an array
 var arr = [];
 //repeat num times
 for (var i = 0; i < num; i++) {
   // ger random color and pysh into arr
   arr.push(randomColor())

 }
 // return that array
 return arr;
}

function randomColor() {
  //pick a red from zero to 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from zero to 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from zero to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}