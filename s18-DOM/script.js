"use strict";

const closeBtn = document.querySelector(".close-btn");
const inputElement = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

let todoArr = [
  { nameTodo: "todo1", isDone: false },
  { nameTodo: "todo2", isDone: false },
  { nameTodo: "todo3", isDone: false },
];

//render todo
function renderTodo(todoArr) {
  todoList.innerHTML = "";
  todoArr.forEach((todo) => {
    let row = `
    <li class="todo-item ">
          <div class="item-wrap">
            <i class="fa-solid fa-check check-icon"></i>
            <span>${todo.nameTodo}</span>
          </div>

          <i class="fa-solid fa-xmark close"></i>
        </li>`;
    todoList.insertAdjacentHTML("afterbegin", row);
  });
  checkTodo();
  deleteTodo();
}
renderTodo(todoArr);

//add todo
function addTodo() {
  let newTodo = {
    nameTodo: inputElement.value,
    isDone: false,
  };
  todoArr.push(newTodo);
  inputElement.value = "";
  renderTodo(todoArr);
}

addBtn.addEventListener("click", () => {
  addTodo();
});

//delete todo
function deleteTodo() {
  // todoList.querySelectorAll(".close").forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     let todoName = e.target.parentElement.textContent.trim();
  //     let i = todoArr.findIndex((todo) => todo.nameTodo === todoName);
  //     todoArr.splice(i, 1);
  //     renderTodo(todoArr);
  //   });
  // });

  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
      e.target.parentElement.remove();
    } else {
      e.target.classList.toggle("checked");
    }
  });
}

function checkTodo() {
  //event publeling
  todoList.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
  });
}

const mainImage = document.querySelector(".main-img div img");
const listImage = document.querySelector(".list-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

listImage.addEventListener("click", (e) => {
  // mainImage.src = e.target.classList.contains("item-img").src;
  if (e.target.classList.contains("item-img")) {
    mainImage.src = e.target.src;
  }
});

prevBtn.addEventListener("click", () => {});
