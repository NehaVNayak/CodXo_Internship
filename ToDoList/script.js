document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
}


/*
This basic to-do list application includes:

An input field to add new tasks.
A button to add the task to the list.
The ability to mark tasks as completed by clicking on them.
A delete button for each task to remove it from the list.

*/ 