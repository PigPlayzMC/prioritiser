// Item in the list
class listItem {
    constructor(title, deadline, details, link) {
        this.title = title; // Title string
        this.deadline = deadline; // Date the task must be completed by
        this.details = details; // Longer string, hidden by default with task details (OPTIONAL)
        this.link = link; // Web link associated with the task (OPTIONAL)
    }
}

// List
var todoList = []

function displayTitle(todoList, index, outputTitle) {
    let newElement = document.createElement("div");
    // Handles title
    newElement.textContent = todoList[index].title; // Create a new div for each value
    outputTitle.appendChild(newElement); // Append it to the parent div 
}

function displayDeadline(todoList, index, outputDeadline) {
    let newElement = document.createElement("div");
    // Handles deadline
    newElement.textContent = todoList[index].deadline;
    outputDeadline.appendChild(newElement);
}

function displayLatestElement(todoList) {
    let outputTitle = document.getElementById("taskTitle");
    let outputDeadline = document.getElementById("taskDeadline");

    let index = todoList.length-1; // Selects latest entry

    displayTitle(todoList, index, outputTitle );

    displayDeadline(todoList, index, outputDeadline);
}

function createNewItem() {
    const title = document.getElementById('titleInput').value;
    const deadline = document.getElementById('deadlineInput').value;
    const details = 0;
    const link = 0;




    // Substitude empty details with explaining message
    if (details == "") {
        const details = "No details were added for this task.";
    }

    todoList.push(new listItem(title, deadline, details, link,));
    displayLatestElement(todoList)
    console.log(todoList[todoList.length-1])
}

function deleteItem() {

}

function editExistingItem() {

}