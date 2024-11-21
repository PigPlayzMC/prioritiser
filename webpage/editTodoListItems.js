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
const todoList = []

function createNewItem() {
    const title = 0;
    const deadline = 0;
    const details = 0;
    const link = 0;




    // Substitude empty details with explaining message
    if (details == "") {
        details = "No details were added for this task.";
    }

    todoList.push(listItem(title, deadline, details, link,));
}

function deleteItem() {

}

function editExistingItem() {

}

