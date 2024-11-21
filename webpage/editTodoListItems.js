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

function createNewItem() {
    const title = document.getElementById('title').value;
    const deadline = document.getElementById('deadline').value;
    const details = 0;
    const link = 0;




    // Substitude empty details with explaining message
    if (details == "") {
        const details = "No details were added for this task.";
    }

    todoList.push(new listItem(title, deadline, details, link,));
    console.log(todoList[todoList.length-1])
}

function deleteItem() {

}

function editExistingItem() {

}