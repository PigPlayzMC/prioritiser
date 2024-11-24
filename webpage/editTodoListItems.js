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

function displayIndividualTask(todoList, index, outputTitle) {
    // Create a container for the task
    let newElement = document.createElement("div");

    // Add the title
    newElement.textContent = todoList[index].title;

    // Add a line break
    newElement.appendChild(document.createElement("br"));

    // Add the deadline
    let deadlineText = document.createTextNode(todoList[index].deadline);
    newElement.appendChild(deadlineText);

    // Add a second line break for task separation
    newElement.appendChild(document.createElement("br"));

    // Append the new element to the output container
    outputTitle.appendChild(newElement);

    // Additional spacing
    newElement.style.marginBottom = "10px";
}

function displayLatestElement(todoList) {
    let outputLocation = document.getElementById("task");

    let index = todoList.length-1; // Selects latest entry

    displayIndividualTask(todoList, index, outputLocation);
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