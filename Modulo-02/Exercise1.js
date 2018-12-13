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
    square.style.padding = '2px';
    bodyElement.appendChild(square);
}

buttonElement.setAttribute('onclick', 'newSquare()');