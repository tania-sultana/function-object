function add(num1, num2){
    console.log( num1, num2);
    var sum = num1 + num2;
    return sum;
    //console.log('return onekta break er moto...return a gele r porer kichu count korena');
}
//add (30, 120);
var total = add(20, 30);
console.log('total', total);


function parameterString(money){
    var drinks = 10;
    var quantity = money/drinks;
    return quantity;
}
var count = parameterString(200);
console.log(count);