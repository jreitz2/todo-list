const addProjectBtn = document.getElementById('add-project-btn');
const addProject = document.getElementById('add-project');
const projects = document.getElementById('projects');
const header = document.getElementById('project-header');
const todoContainer = document.getElementById('todo-container');
const addTodoForm = document.getElementById('addTaskForm');
const inboxIcon = document.getElementById('inbox-icon');
const displayAddForm = document.querySelector('.add-todo');
const LOCAL_STORAGE_LIST_KEY = 'task.lists';

export const projectFolder = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];


function createProject(projectTitle) {
    return {
        projectTitle: projectTitle,
        todos: []
    }
};

function createTodo(title, description, date) {
    return {
        title: title,
        description: description,
        date: date
    }
};

const sampleProject = createProject("Sample Project");
const sampleTodo = createTodo("Sample todo", "", "today's date");
if (projectFolder.length === 0) {
    sampleProject.todos.push(sampleTodo);
    projectFolder.push(sampleProject);
}


export default function newProject() {
    addProjectBtn.addEventListener('click', () => {
        addProject.style.display = "none";
        const newHtml = `<form id="add-project-form">
                            <input type="text" name="addProjectTitle" placeholder="Add a project">
                        </form>`;
        const newHtml1 = document.createElement('form');
        newHtml1.innerHTML = newHtml;
        projects.appendChild(newHtml1);
        newHtml1.addEventListener('submit', e => {
             e.preventDefault();
             const project1 = createProject(newHtml1.addProjectTitle.value);
             projectFolder.push(project1);
             newHtml1.addProjectTitle.value = '';
             newHtml1.style.display = "none";
             removeAllChildNodes(projects);
             addProjectToList();
             addProject.style.display = "flex";
        })
    });
};

export function addProjectToList () {
    projectFolder.forEach(project => {
        const newProjectHtml = document.createElement('div');
        newProjectHtml.classList.add("project");
        const newProjectIcon = document.createElement('img');
        newProjectIcon.src = `./project.png`;
        const newProjectTrash = document.createElement('img');
        newProjectTrash.src = `./delete.png`;
        newProjectTrash.classList.add('delete');
        newProjectTrash.addEventListener('click', () => {
            projectFolder.splice(projectFolder.indexOf(project), 1);
            removeAllChildNodes(projects);
            addProjectToList();
        });
    
        newProjectIcon.addEventListener('click', () => {
            function populateTodoList() {
                displayAddForm.style.display = "flex";
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
    });
        const newProjectTitle = document.createElement('div');
        newProjectTitle.textContent = `${project.projectTitle}`;
        newProjectHtml.appendChild(newProjectIcon);
        newProjectHtml.appendChild(newProjectTitle);
        newProjectHtml.appendChild(newProjectTrash);
        projects.appendChild(newProjectHtml);
        save();
    });
};


export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

export function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectFolder));
};

export function populateInbox() {
    removeAllChildNodes(todoContainer);
    displayAddForm.style.display = "none";
    projectFolder.forEach(project => {
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
                populateInbox();
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
    })
    save();
})};

export function inboxButton() {
    inboxIcon.addEventListener('click', () => {
        populateInbox();
        header.textContent = 'Inbox';
    })
};