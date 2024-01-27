
const item = "John : date : gender"
const  text = item.split(":");
const persona = text.reduce((obj,item) => {
    obj[item] = item;
return obj;
},{});
console.log(text);
console.log(persona);
