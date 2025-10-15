// DOM Elemanları
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Local Storage'dan verileri al
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Sayfa yüklendiğinde todos'u listele
document.addEventListener("DOMContentLoaded", renderTodos);

// Todo ekleme
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return alert("Boş görev eklenemez!");

  const newTodo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  saveAndRender();
  todoInput.value = "";
});

// Todo'ları ekrana yazdır
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = `list-group-item ${todo.completed ? "completed" : ""}`;
    li.textContent = todo.text;

    // Todo öğesi tıklandığında tamamlandı olarak işaretle
    li.addEventListener("click", () => toggleComplete(todo.id));

    // Buton grubu
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    // Düzenle butonu
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm";
    editBtn.textContent = "Düzenle";
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // li tıklamasını engeller
      editTodo(todo.id);
    });

    // Sil butonu
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Sil";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    });

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(btnGroup);
    todoList.appendChild(li);
  });
}

// Todo tamamla
function toggleComplete(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveAndRender();
}

// Todo düzenle
function editTodo(id) {
  const todo = todos.find(t => t.id === id);
  const newText = prompt("Yeni içeriği gir:", todo.text);
  if (newText && newText.trim() !== "") {
    todo.text = newText.trim();
    saveAndRender();
  }
}

// Todo sil
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveAndRender();
}

// Local Storage kaydet ve listeyi güncelle
function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
