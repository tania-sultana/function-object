/*
function make_avg(a, b, c){
    var avg = (a+b+c)/3;
    console.log(avg);
}
make_avg(3,4,5);*/
function make_avg(array){
    //var array = [1, 2, 3, 4, 10];
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        
        sum = sum + array[i];
    }
    return sum/array.length
    // console.log(average);

//make_avg(1, 2, 3, 4, 10);
console.log(avg([1, 2, 3, 4, 10]))
}