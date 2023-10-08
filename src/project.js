function projectFactory(projectTitle, projectDescription){
    return{projectTitle, projectDescription};
}

export function displayCreateNewProject(){
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const formContainer = document.createElement('div');
    formContainer.classList.add('new-project-form');
    overlay.appendChild(formContainer);

    const projectTitle = document.createElement('input');
    projectTitle.setAttribute('type', 'text');
    projectTitle.classList.add('project-title');
    projectTitle.setAttribute('id', 'project-title');
    projectTitle.setAttribute('placeholder', 'Title');
    formContainer.appendChild(projectTitle);

    const projectDescription = document.createElement('input');
    projectDescription.setAttribute('type', 'text');
    projectDescription.classList.add('project-description');
    projectDescription.setAttribute('id', 'project-description');
    projectDescription.setAttribute('placeholder', 'Description');
    formContainer.appendChild(projectDescription);

    const createBtn =document.createElement('button');
    createBtn.classList.add('create');
    createBtn.textContent = 'Create';
    formContainer.appendChild(createBtn);

    const cancelBtn =document.createElement('button');
    cancelBtn.classList.add('cancel');
    cancelBtn.textContent = 'Cancel';
    formContainer.appendChild(cancelBtn);

    const sideBar = document.querySelector('.side-bar');
    sideBar.appendChild(overlay);
}


export function createProject() {
    const projectsList = document.querySelector('.projects');
    const projectTitle = document.getElementById('project-title');

    const project_item = document.createElement('li');
    project_item.classList.add('project-item');
    project_item.textContent = projectTitle.value;
    projectsList.appendChild(project_item);    
}