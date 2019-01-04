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
listElement.innerHTML = '';

    for(repo of repos) {
        const textItem = document.createTextNode(repo.name);
        const listItem = document.createElement('li');

        listElement.appendChild(textItem);
        listElement.appendChild(listItem);
    }
}

function showLoading(){
    listElement.innerHTML = '';

    var loadText = document.createTextNode('Carregando....');
    var loadLabel = document.createElement('li');

    loadLabel.appendChild(loadText);
    listElement.appendChild(loadLabel);
}

function showError(){
    listElement.innerHTML = '';

    var errorText = document.createTextNode('Nao foi possivel encontrar o usuario ' + getUser());
    var errorLabel = document.createElement('li');

    errorLabel.style.color = '#FF5555';

    errorLabel.appendChild(errorText);
    listElement.appendChild(errorLabel);
}

function getRepos(){
    if( !getUser() ) return;

    showLoading();

    axios.get('https://api.github.com/users/' + getUser() + '/repos')
    .then(function (response) {
        showRepos(response.data);
    })
    .catch(function () {
        showError();
    });
}

function getUser(){
    return inputElement.value;
}

function renderRespose(){
    getRepos();
}
