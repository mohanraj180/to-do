import './style.css';
import checkList from './checklist_FILL0_wght400_GRAD0_opsz24.svg'

const checkListImg = document.createElement('img');
checkListImg.setAttribute('src', checkList)
const header = document.querySelector('header');
header.appendChild(checkListImg);

const projects = document.querySelector('.projects');
const project_item = document.querySelector('.projects-item');
projects.addEventListener('click',() => {
    
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
} );

