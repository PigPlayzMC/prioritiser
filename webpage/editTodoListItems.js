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
    let newElement = document.createElement("div");
    // Handles title
    newElement.textContent = todoList[index].title + "\n" + todoList[index].deadline; // Create a new div for each value
    outputTitle.appendChild(newElement); // Append it to the parent div 
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