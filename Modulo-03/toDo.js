var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderOnScreen(){
    listElement.innerHTML  = '';
    
    for(toDo of toDos){
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var pos = toDos.indexOf(toDo);

        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');

        linkElement.setAttribute('href', '#');

        linkElement.appendChild(linkText);

        toDoElement.appendChild(toDoText);
        
        toDoElement.appendChild(linkElement);

        listElement.appendChild(toDoElement);
    }
}

renderOnScreen();

function addToDo(){
    var toDoText = inputElement.value;
    toDos.push(toDoText);
    inputElement.value = '';
    renderOnScreen();
    saveToStorage();
}



buttonElement.onclick = addToDo;

function deleteToDo(pos){
    toDos.splice(pos, 1);
    renderOnScreen();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(toDos));
}