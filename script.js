const btn_add = document.getElementById('addTaskBtn');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clr_btn = document.querySelector('.clear-btn');

window.addEventListener('load', function () {
    // Load tasks from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        // console.log(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
        const task = localStorage.key(i);
        const status = localStorage.getItem(task);
        const completed = status.includes('completed');
        addNewLi(task, completed);
    }
});

//Thêm sự kiện cho nút xóa
clr_btn.addEventListener('click', function () {
    input.value = '';
    clr_btn.style.display = 'none';
    input.focus();
});

// Ẩn/hiện nút xóa khi ô input trống
input.addEventListener('input', function () {
    clr_btn.style.display = input.value ? 'block' : 'none';
});

//Người dùng nhập xong
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        btn_add.click();
    }
});
btn_add.addEventListener('click', function () {
    if (input.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    else {
        addNewLi(input.value);
    }
});

//Hàm thêm thẻ li mới
function addNewLi(task, completed = false) {
    const li = document.createElement('li');
    li.innerHTML = `<div class="task-info">
                            <div class="check-icon-wrapper">
                                ${completed ? '<i class="material-icons check-icon">check_circle</i>' : ''}
                            </div>
                            <span class="task-text">${task}</span>
                        </div>
                        <i class="material-icons delete-icon">delete</i>`

    // Hàm đổi trạng thái completed
    function toggleCompleted(e) {
        const parentLi = e.target.closest('.task-item');
        parentLi.classList.toggle('completed');
        if (parentLi.classList.contains('completed')) {
            checkIconWrapper.innerHTML = '<i class="material-icons check-icon">check_circle</i>';
        } else {
            checkIconWrapper.innerHTML = '';
        }
        localStorage.setItem(taskText.textContent, parentLi.className);
    }
    // Thêm sự kiện hoàn thành task
    const checkIconWrapper = li.querySelector('.check-icon-wrapper');
    checkIconWrapper.addEventListener('click', (e) => toggleCompleted(e));
    const taskText = li.querySelector('.task-text');
    taskText.addEventListener('click', (e) => toggleCompleted(e));

    // Thêm sự kiện xóa task
    const deleteIcon = li.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', (e) => {
        const parentLi = e.target.closest('.task-item');
        parentLi.remove();
        //Xóa khỏi localStorage
        localStorage.removeItem(taskText.textContent);

    });

    //Thêm thẻ li vào ul
    li.className = completed ? 'task-item completed' : 'task-item';
    taskList.appendChild(li);
    input.value = '';
    //Lưu vào localStorage
    localStorage.setItem(taskText.textContent, li.className);
    clr_btn.style.display = 'none';
}