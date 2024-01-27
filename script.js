const personsList = []; //array of tasks

class Person {
    constructor(name,date,gender) {
        this.name = name;
        this.date = date;
        this.age = getAgeFromDate(date);
        this.gender = gender;
        this.htmlElement = "";
        this.selected = false;
        this.string = `${this.name} – ${this.gender} – ${this.age}`;
        personsList.push(this);
        addPerson(this);
    }
}

function deleteFromList(element){
    personsList.filter((item,index) => item.htmlElement === element ? delete personsList[index] : console.log('element not found'))
    console.log(personsList);
}

function sortListByName(){
    personsList.sort((a,b) => a.name.localeCompare(b.name));
    refreshTask();
    console.log(personsList);
}
//let a = new Task("hello");
//console.log(personsList);
function selectPersonInList(element,select){
    personsList.find(item => item.htmlElement === element ?  item.selected = select : console.log('element not found'))
console.log(personsList);
}

function deleteSelectedFromList(){
    personsList.forEach((item,index) => item.selected === true ? delete personsList[index] : console.log('No selected tasks') );
    refreshTask();
}

function getStats(){
    let ages = personsList.map(person => person.age);
    let maxAge = Math.max(...ages);
    let minAge = Math.min(...ages);
    let averAge = ages.reduce((res,item) => res +=item ) /ages.length;
    console.log(maxAge,minAge,averAge);
    return [maxAge,minAge,averAge];
}

function getAgeFromDate(birthDateString){
        const today = new Date();
        const birthDate = new Date(birthDateString.split('.').reverse().join('-'));

        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;

}
