var inputElement = document.createElement('input');
var buttonElement = document.createElement('button');
var buttonText = document.createTextNode('Adicionar');
var bodyElement = document.querySelector('body');

inputElement.setAttribute('type', 'text');
inputElement.setAttribute('name', 'user');
inputElement.setAttribute('placeholder', 'Usuario do Github');
buttonElement.appendChild(buttonText);
bodyElement.appendChild(inputElement);
bodyElement.appendChild(buttonElement);

var getRepos = function(username){
    return new Promise(function(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + username + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else
                {
                    reject('Usuário não encontrado');
                }
            }
        }
    });
}

function getUser(){
    var username = inputElement.value;
    inputElement.value = '';
    return username;
}
