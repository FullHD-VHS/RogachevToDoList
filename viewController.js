//Inputs
addItem.onclick = createTask;
sortByNameBtn.onclick = sortByName;
deleteSelected.onclick = deleteSelectedTasks;

item.onkeyup = function (e) {e.key === "Enter" ? createTask() : console.log('Not Enter key up');
}
refreshList.onclick=refreshTask;
function createTask(){
    const  text = item.value.trim();
    if (text){
        new Task(text);
        console.log(toDoList);
    }
    item.value="";
}

function removeParentElement(e){
    e.target.parentElement.remove();
    deleteFromList(e.target.parentElement);
}

function sortByName() {
    sortListByName();
}
function selectTask(e) {
    e.target.checked ? e.target.parentElement.style.fontWeight = "bold" : e.target.parentElement.style.fontWeight = "normal" ;
    selectTaskInList(e.target.parentElement,e.target.checked);
}

function deleteSelectedTasks(e) {
if (confirm("You sure?")) {
deleteSelectedFromList();
}
}

//Output

function addTask(task){
    console.log(task);
    const li = document.createElement('li');
    //create button Delete
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('X'));
    buttonDel.classList.add('del');
    buttonDel.classList.add('btn');
    buttonDel.classList.add('btn-outline-danger');
    buttonDel.onclick = removeParentElement;
    //create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = selectTask;
    checkbox.classList.add('checkbox');
    li.append(checkbox,document.createTextNode(task.string), buttonDel);
    todoList.appendChild(li);
    task.htmlElement = li;
}

function refreshTask(){
    //console.log(toDoList);
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
//show all tasks again
    toDoList.forEach(item => addTask(item));

}
