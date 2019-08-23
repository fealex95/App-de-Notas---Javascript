var listTextElement = document.querySelector('ul.list-group');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listTextElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        todoElement.setAttribute('class','list-group-item d-flex justify-content-between align-items-center')
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('button');
        linkElement.href = '#';   
        linkElement.setAttribute('type','button');
        linkElement.setAttribute('class','btn btn-danger');     
        var textLink = document.createTextNode('Excluir');

        var id = todos.indexOf(todo);

        linkElement.setAttribute('onclick','deleteTodo(' + id + ')');

        linkElement.appendChild(textLink);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listTextElement.appendChild(todoElement);
        
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    if(todoText !== ''){    
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();        
    }
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(id){
    todos.splice(id,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){    
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

