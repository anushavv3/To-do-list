"use strict";

// ===== DOM ELEMENTS =====
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// ===== FUNCTION: CREATE TASK =====
function createTask(taskText) {

  // Create list item
  const li = document.createElement("li");

  // Task text span
  const span = document.createElement("span");
  span.textContent = taskText;

  // Toggle complete on click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
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

// ===== FUNCTION: ADD TASK =====
function addTask() {

  try {

    const taskText = input.value.trim();

    // Validation
    if (taskText === "") {
      alert("Task cannot be empty");
      return;
    }

    const taskElement = createTask(taskText);
    list.appendChild(taskElement);

    // Clear input
    input.value = "";
    input.focus();

  } catch (error) {
    console.error("Error adding task:", error);
  }
}

// ===== EVENT LISTENERS =====

// Add button click
button.addEventListener("click", addTask);

// Enter key support
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
