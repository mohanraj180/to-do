import { createAddTaskForm, toggleAddTaskContainerVisibility } from './todos';

import './style.css';
import checkList from './checklist_FILL0_wght400_GRAD0_opsz24.svg';
import addSymbol from './add_FILL0_wght400_GRAD0_opsz24.svg';

const header = document.querySelector('header');
const checkListIcon = document.createElement('img');
checkListIcon.classList.add('header-icons');
checkListIcon.setAttribute('src', checkList)
header.appendChild(checkListIcon);

const addIcon = document.createElement('img');
addIcon.setAttribute('src', addSymbol);
addIcon.setAttribute('id', 'add-icon');
addIcon.classList.add('header-icons');
header.appendChild(addIcon);


const projects = document.querySelector('.projects');
const project_item = document.querySelector('.projects-item');
projects.addEventListener('click', () => {

    const projectItemDisplay = window.getComputedStyle(project_item).getPropertyValue('display');

    switch (projectItemDisplay) {
        case 'none':
            project_item.style.display = 'block';
            break;
        case 'block':
            project_item.style.display = 'none';
            break;

        default:
            break;
    }
});

const addIconBtn = document.querySelector('#add-icon');
addIconBtn.addEventListener('click', () => {
    console.log('addicon clicked');

    createAddTaskForm();
    
    const addTaskContainer = document.querySelector('.new-task-container');

    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', () => {
        toggleAddTaskContainerVisibility();
        addTaskContainer.remove();
    });

    const cancelBtn = document.querySelector('#cancel');
    cancelBtn.addEventListener('click', () => {
        toggleAddTaskContainerVisibility();
        addTaskContainer.remove();
    });
    
});


