const userInput = document.querySelector("#task-input"); // Get the input field element
const submit = document.querySelector("#submit-btn"); // Get the submit button element
const listBox = document.querySelector(".to-do-list"); // Get the to-do list container element

submit.addEventListener("click", function () {
  const task = userInput.value; // Get the value of the input field
  if (task != "") {
    addToDO(task); // Call the addToDO function with the task value
  } else {
    alert("Please write something"); // Display an alert if the input field is empty
  }
});

const addToDO = (task) => {
  const listitem = document.createElement("li"); // Create a new list item element
  listitem.className = "list-item"; // Set the class name for the list item

  listitem.innerHTML = `
    ${task}
    <div class="item-tools">
        <i class="fa-solid fa-check text-success task-completed"></i>
        <i class="fa-solid fa-trash text-danger clear-task"></i>
    </div>
    `; // Set the HTML content for the list item, including the task and tool icons

  listitem.querySelector(".clear-task").addEventListener("click", function () {
    listitem.remove(); // Add event listener to the clear-task icon to remove the list item when clicked
  });

  listitem
    .querySelector(".task-completed")
    .addEventListener("click", function () {
      listitem.classList.toggle("task-done"); // Add event listener to the task-completed icon to toggle the task-done class on the list item
      console.log("classAdded");
    });

  listBox.appendChild(listitem); // Append the list item to the to-do list container
};
