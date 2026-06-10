// HTML DOM Mini Project - Interactive To-Do List
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// Thêm công việc mới
function addTask() {
    const text = taskInput.value.trim();
    
    if (text === '') {
        alert('Vui lòng nhập công việc!');
        return;
    }

    const li = document.createElement('li');        // Tạo element mới
    li.className = 'task-item';

    li.innerHTML = `
        <input type="checkbox" class="complete-checkbox">
        <span class="task-text">${text}</span>
        <button class="delete-btn">Xóa</button>
    `;

    // DOM Event: Đánh dấu hoàn thành
    li.querySelector('.complete-checkbox').addEventListener('change', function() {
        li.classList.toggle('completed', this.checked);
        updateCount();
    });

    // DOM Event: Xóa công việc
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.style.opacity = '0';
        setTimeout(() => {
            li.remove();
            updateCount();
        }, 300);
    });

    taskList.appendChild(li);   // Thêm vào danh sách
    taskInput.value = '';
    updateCount();
}

// Cập nhật số lượng công việc
function updateCount() {
    taskCount.textContent = taskList.children.length;
}

// Sự kiện
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Khởi tạo
updateCount();