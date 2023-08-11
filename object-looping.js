var shopping = {
    books: 3,
    pen: 5,
    mouse:1,
    shoes: 2,
    sunglass: 4
}
const keys = Object.keys(shopping);
console.log(keys); 
const values = Object.values(shopping);
console.log(values);
for(var i = 0; i < keys.length; i++){
    var p_name = keys[i];
var p_value = shopping[p_name];
console.log(p_name, p_value);
}
for(var p_name in shopping){
    const value = shopping[p_name];
    console.log(p_name, value);
}