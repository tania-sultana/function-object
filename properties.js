var shopping = {
    books: 3,
    pen: 5,
    mouse:1
}
var penCount = shopping.pen;
var penCount2 = shopping['pen'];
var properties = Object.keys(shopping);
var propertiesValue = Object.values(shopping);
console.log(properties);
console.log(propertiesValue); 
// console.log(shopping);

var p_name = 'mouse';
var p_value = shopping[p_name];
console.log(p_name, p_value);