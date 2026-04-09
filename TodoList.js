// Array ko LocalStorage se nikalo, nahi toh khali array lo
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function render() {
    // Aaj ki date nikalne ka shortcut (YYYY-MM-DD format mein)
    const todayDate = new Date().toLocaleDateString('en-CA'); 

    // Teeno dabbe khali karo
    document.getElementById('today').innerHTML = '';
    document.getElementById('future').innerHTML = '';
    document.getElementById('completed').innerHTML = '';

    // Array par loop lagao
    todos.forEach((t, i) => {
        const div = document.createElement('div');
        div.className = t.completed ? 'task completed-task' : 'task';
        
        // Task ka data aur simple text buttons
        div.innerHTML = `
            <span>${t.name} | ${t.date} | ${t.priority}</span>
            <div>
                ${!t.completed ? `<button onclick="markDone(${i})">Done</button>` : ''}
                <button onclick="delTask(${i})">Delete</button>
            </div>
        `;

        // Check karke sahi dabbe mein bhejo
        if (t.completed) {
            document.getElementById('completed').appendChild(div);
        } else if (t.date === todayDate) {
            document.getElementById('today').appendChild(div);
        } else {
            document.getElementById('future').appendChild(div);
        }
    });

    // Local storage update kar do
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add Button Logic
document.getElementById('form').onsubmit = function(e) {
    e.preventDefault(); 
    
    todos.push({
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        priority: document.getElementById('priority').value,
        completed: false
    });
    
    e.target.reset(); 
    render();         
};

// Complete Task Logic
window.markDone = function(index) {
    todos[index].completed = true;
    render();
};

// Delete Task Logic
window.delTask = function(index) {
    todos.splice(index, 1);
    render();
};

// Shuru mein ek baar screen paint karo
render();