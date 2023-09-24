import './style.css';
import checkList from './checklist_FILL0_wght400_GRAD0_opsz24.svg'

const checkListImg = document.createElement('img');
checkListImg.setAttribute('src', checkList)
const header = document.querySelector('header');
header.appendChild(checkListImg);