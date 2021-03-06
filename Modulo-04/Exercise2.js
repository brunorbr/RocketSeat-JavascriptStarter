var inputElement = document.createElement('input');
var buttonElement = document.createElement('button');
var buttonText = document.createTextNode('Adicionar');
var bodyElement = document.querySelector('body');
var listElement = document.createElement('ul');

inputElement.setAttribute('type', 'text');
inputElement.setAttribute('name', 'user');
inputElement.setAttribute('placeholder', 'Usuario do Github');
buttonElement.setAttribute('onclick', 'getRepos()');
buttonElement.appendChild(buttonText);
bodyElement.appendChild(inputElement);
bodyElement.appendChild(buttonElement);
bodyElement.appendChild(listElement);

function showRepos(repos){
    for(repo of repos) {
        const textItem = document.createTextNode(repo.name);
        const listItem = document.createElement('li');

        listElement.appendChild(textItem);
        listElement.appendChild(listItem);
    }
}

function getRepos(){
    if( !getUser() ) return;

    axios.get('https://api.github.com/users/' + getUser() + '/repos')
    .then(function (response) {
        showRepos(response.data);
    }) 
}

function getUser(){
    return inputElement.value;
}

function renderRespose(){
    getRepos();
}
