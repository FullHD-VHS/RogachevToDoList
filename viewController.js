//Inputs
addItem.onclick = createPerson;
sortByNameBtn.onclick = sortByName;
deleteSelectedBtn.onclick = deleteSelected;

item.onkeyup = function (e) {e.key === "Enter" ? createPerson() : console.log('Not Enter key up');
}
refreshList.onclick=refreshTask;
function createTask(){
    const  text = item.value.trim();
    if (text){
        new Person(text);
        console.log(personsList);
    }
    item.value="";
}

function createPerson(){
    const text = item.value.split(":").map(element => element.trim()); // Удаляем пробелы
    if (text) {
        new Person(...text)
    }
    item.value="";
}

function removeParentElement(e){
    e.target.parentElement.remove();
    deleteFromList(e.target.parentElement);
    showStats(...getStats());
}

function sortByName() {
    sortListByName();
}
function selectTask(e) {
    e.target.checked ? e.target.parentElement.style.fontWeight = "bold" : e.target.parentElement.style.fontWeight = "normal" ;
    selectPersonInList(e.target.parentElement,e.target.checked);
}

function deleteSelected(e) {
if (confirm("You sure?")) {
deleteSelectedFromList();
    showStats(...getStats());
}
}

//Output

function addPerson(person){
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
    li.append(checkbox,document.createTextNode(person.string), buttonDel);
    person.htmlElement = li;
    personsOl.appendChild(li);
    showStats(...getStats());
}

function refreshTask(){
    //console.log(toDoList);
    while (personsOl.firstChild) {
        personsOl.removeChild(personsOl.firstChild);
    }
//show all tasks again
    personsList.forEach(item => addPerson(item));
    showStats(...getStats());
}

function showStats(maxAge,minAge,averAge){
    console.log('Entry to showStats')
    console.log(maxAge,minAge,averAge);

    while (stats.firstChild) {
        stats.removeChild(stats.firstChild);
    }
    const h2Max = document.createElement('h3');
    h2Max.append(document.createTextNode(`Maximum ${maxAge}`));
    const h2Min = document.createElement('h3');
    h2Min.append(document.createTextNode(`Minimum ${minAge}`));
    const h2Average = document.createElement('h3');
    h2Average.append(document.createTextNode(`Average ${averAge}`));
    document.getElementById('stats').append(h2Max,h2Min,h2Average);
    console.log('Exit to showStats')

}
