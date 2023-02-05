const addTodoForm = document.getElementById('addTaskForm');
const header = document.getElementById('project-header');
const todoContainer = document.getElementById('todo-container');
import {projectFolder, save} from './addProject.js';
import {removeAllChildNodes} from './addProject.js';
const LOCAL_STORAGE_LIST_KEY = 'task.lists';

function createTodo(title, description, date) {
    return {
        title: title,
        description: description,
        date: date
    }
};

export default function addTask () {
    addTodoForm.addEventListener('submit', e => {
        e.preventDefault();
        const newTodo = createTodo(addTodoForm.addTodo.value, addTodoForm.addDescription.value, addTodoForm.addDate.value);
        projectFolder.forEach(project => {
            if(project.projectTitle === header.textContent) {
                project.todos.push(newTodo);
                function populateTodoList() {
                    header.textContent = `${project.projectTitle}`;
                    removeAllChildNodes(todoContainer);
                    project.todos.forEach(todo => {
                    const newTodo = document.createElement('div');
                    newTodo.classList.add('todo');
                    const newTodoTitle = document.createElement('div');
                    newTodoTitle.textContent = `${todo.title}`;
                    const newTodoDate = document.createElement('div');
                    newTodoDate.textContent = `${todo.date}`;
                    const newTodoTrash = document.createElement('img');
                    newTodoTrash.src = './delete.png';
                    newTodoTrash.classList.add('delete');
                    newTodoTrash.addEventListener('click', () => {
                        project.todos.splice(project.todos.indexOf(todo), 1);
                        removeAllChildNodes(todoContainer);
                        populateTodoList();
                        console.log(projectFolder);
                    });
                    newTodo.appendChild(newTodoTitle)
                    newTodo.appendChild(newTodoDate);
                    newTodo.appendChild(newTodoTrash);
                    todoContainer.appendChild(newTodo);

                    const newTodoDescription = document.createElement('div');
                    newTodoDescription.classList.add('add-todo');
                    newTodoDescription.textContent = `${todo.description}`;
                    newTodo.appendChild(newTodoDescription);
                    newTodo.addEventListener('click', () => {
                        newTodoDescription.classList.toggle('displayShow');
                    });
                    
                });  
            }
            populateTodoList();
            addTodoForm.reset();
           
            }
        })
        save();
    });
}