"use strict";




const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");



function createTask(taskText) {


  const li = document.createElement("li");

 
  const span = document.createElement("span");
  span.textContent = taskText;

  
}

function createTask(taskText) {

  
  const li = document.createElement("li");

  
  const span = document.createElement("span");
  span.textContent = taskText;


  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });


 


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}






function addTask() {

  try {

    const taskText = input.value.trim();


  

    if (taskText === "") {
      alert("Task cannot be empty");
      return;
    }

    const taskElement = createTask(taskText);
    list.appendChild(taskElement);


    input.value = "";
    input.focus();

  } catch (error) {
    console.error("Error adding task:", error);
  }
}





button.addEventListener("click", addTask);



button.addEventListener("click", addTask);



input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
