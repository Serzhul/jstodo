const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDolist');

const TODOS_LS = 'toDos';

let toDos = [];

const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};
const deleteTodo = (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
};

const paintTodo = (text) => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerHTML = '❌';
    delBtn.addEventListener('click', deleteTodo);
    span.innerText = text + '';
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: toDos.length + 1,
    };
    toDos.push(toDoObj);
    saveToDos();
};

const handleSubmitTodo = (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = '';
};

const loadTodos = () => {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo) => {
            paintTodo(toDo.text);
        });
    }
};

const initTodo = () => {
    loadTodos();
    toDoForm.addEventListener('submit', handleSubmitTodo);
};

initTodo();
