const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const buttonAdd = document.getElementById("buttonadd");
const checkedContainer = document.getElementById("checked-container");
const firstIcon = document.querySelector('.list-item i');

/* agregar tareas */

function addList(task) {
    const listItem = `
        <li style="margin-top: 10px" class="list-item">
            <i class="fa-regular fa-circle"></i>
            <p class="text">${task}</p>
            <i class="fa-regular fa-trash-can deletebtn"></i>
        </li>
    `;
    list.insertAdjacentHTML("beforeend", listItem);
}

function addTask() {
    const task = input.value.trim();
    if (task) {
        addList(task);
        input.value = "";
    }
}

buttonAdd.addEventListener("click", addTask);

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

/* Cambio de iconos para marcar las tareas realizadas o sin realizar */

function changeIcon(event) {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains('fa-circle')) {
        clickedIcon.classList.remove('fa-circle');
        clickedIcon.classList.add('fa-circle-check');
    } else if (clickedIcon.classList.contains('fa-circle-check')) {
        clickedIcon.classList.remove('fa-circle-check');
        clickedIcon.classList.add('fa-circle-xmark');
    } else if (clickedIcon.classList.contains('fa-circle-xmark')) {
        clickedIcon.classList.remove('fa-circle-xmark');
        clickedIcon.classList.add('fa-circle');
    }
}

// Agregar un evento de clic a todos los elementos <i> dentro de la lista
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'I') {
        changeIcon(event);
    }
});

/* Borrar las tareas */

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("deletebtn")) {
        const listItem = event.target.closest("li");
        if (listItem) {
            listItem.remove(); // Eliminar el elemento <li> al que pertenece el botón
        }
    }
});






