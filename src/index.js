import { displayCreateNewProject, createProject} from './project';
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


const createProjectBtn = document.querySelector('#new-project');
createProjectBtn.addEventListener('click', () => {
    displayCreateNewProject();

    const overlay = document.querySelector('.overlay');
    const createBtn = document.querySelector('.create');
    createBtn.addEventListener('click', () => {
        createProject();
        overlay.remove();
    });

    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.addEventListener('click', () => {
        overlay.remove();
    })
});

const addIconBtn = document.querySelector('#add-icon');
addIconBtn.addEventListener('click', () => {
    console.log('addicon clicked');

    createAddTaskForm();
    
    const overlay = document.querySelector('.overlay');

    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', () => {
        overlay.remove();
    });

    const cancelBtn = document.querySelector('#cancel');
    cancelBtn.addEventListener('click', () => {
        overlay.remove();
    });
    
});


