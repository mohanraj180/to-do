function toDoFactory() {
    return {
        title, description, duedate, priority, notes, projectName
    };
}


export function createAddTaskForm() {
    const content = document.querySelector('.content');
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('new-task-container');

    const taskDesc = document.createElement('input');
    taskDesc.setAttribute('type', 'text');
    taskDesc.setAttribute('id', 'task-description');
    taskDesc.setAttribute('placeholder', 'Add task');
    addTaskContainer.appendChild(taskDesc);

    const addBtn = document.createElement('button');
    addBtn.setAttribute('id', 'add');
    addBtn.textContent = 'Add';
    addTaskContainer.appendChild(addBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('id', 'cancel');
    cancelBtn.textContent = 'Cancel';
    addTaskContainer.appendChild(cancelBtn);


    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.appendChild(addTaskContainer);

    content.appendChild(overlay);
}


