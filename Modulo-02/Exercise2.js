var buttonElement = document.createElement("BUTTON");
var buttonText = document.createTextNode("Create a new square");

buttonElement.appendChild(buttonText);

bodyElement = document.querySelector('body');
bodyElement.appendChild(buttonElement);

function newSquare(){
    var square = document.createElement("div");
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.backgroundColor = '#FF0000';
    square.style.margin = '2px';
    bodyElement.appendChild(square);

    square.onmouseover = function(){
        square.style.background = getRandomColor();
    }
}

buttonElement.setAttribute('onclick', 'newSquare()');

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}