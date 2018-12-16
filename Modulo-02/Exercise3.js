var nomes = ["Jonas", "Roger", "Pedro", "Bernardo"];

var bodyElement = document.querySelector('body');

var unoderedListElement = document.createElement('ul');
var listItem;
bodyElement.appendChild(unoderedListElement);

for (const nome of nomes) {
    var listItemText = document.createTextNode(nome);
    listItem = document.createElement('li');
    listItem.appendChild(listItemText);
    unoderedListElement.appendChild(listItem);
}