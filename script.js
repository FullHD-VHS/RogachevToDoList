const toDoList = []; //array of tasks

class Task {
    constructor(description) {
        this.creationDate = getCurrentDay();
        this.description = description;
        this.htmlElement = "";
        this.selected = false;
        this.string = `${this.creationDate} – ${this.description}`;
        toDoList.push(this);
        addTask(this);
    }
}

function getCurrentDay(){
    const d = new Date();
    const date = d.toDateString()
    const h = d.getHours();
    const m = d.getMinutes();
    return(`${date} ${h}:${m} `);
}

function deleteFromList(element){
    toDoList.filter((item,index) => item.htmlElement === element ? delete toDoList[index] : console.log('element not found'))
    console.log(toDoList);
}

function sortListByName(){
    toDoList.sort((a,b) => a.description.localeCompare(b.description));
    refreshTask();
    console.log(toDoList);
}
//let a = new Task("hello");
//console.log(toDoList);
function selectTaskInList(element,select){
    toDoList.find(item => item.htmlElement === element ?  item.selected = select : console.log('element not found'))
console.log(toDoList);
}

function deleteSelectedFromList(){
    toDoList.forEach((item,index) => item.selected === true ? delete toDoList[index] : console.log('No selected tasks') );
    refreshTask();
}
