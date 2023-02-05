import './style.css'
import { formatDistance, subDays } from 'date-fns';
console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));
import searchIcon from './assets/search.png';
import inbox from './assets/inbox.png';
import calendar from './assets/calendar.png';
import logo from './assets/logo.png';
import plus from './assets/plus.png';
import trash from './assets/delete.png';
import ghLogo from './assets/github.png';
import project from './assets/project.png';
import newProject from './assets/new-project.png';
import light from './assets/light.png';
import dark from './assets/dark.png';



import newProjectFunction from './addProject.js';
newProjectFunction();

import {projectFolder} from './addProject.js';
import {addProjectToList, populateInbox, inboxButton} from './addProject.js';
addProjectToList();
populateInbox();
inboxButton();
import addTask from './addTask.js';
addTask();


//night mode
const nightModeBtn = document.querySelector('.dark-circle');
const main = document.querySelector('.main');
const body = document.querySelector('body');
const sideBar = document.querySelector('.side-bar');

nightModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    sideBar.classList.toggle('dark-mode');
})