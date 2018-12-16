var nome;
var formElement = document.createElement('input');
var buttonElement = document.createElement('button');
var buttonText = document.createTextNode('Adicionar');
var bodyElement = document.querySelector('body');
var listElement = document.createElement('ul');

formElement.setAttribute('type', 'text');
formElement.setAttribute('name', 'nome');
buttonElement.setAttribute('onclick', 'adicionar()')
buttonElement.appendChild(buttonText);
bodyElement.appendChild(formElement);
bodyElement.appendChild(buttonElement);
bodyElement.appendChild(listElement);

function adicionar(){
    nome = formElement.value;
    formElement.value = "";
    mostrarNomes(nome);
}
function mostrarNomes(nomeInserido){
    listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(nomeInserido));
    listElement.appendChild(listItem);
}
