// PART 1

//Array average
function average(array){
    var sum = 0;
    var count = array.length;
    for (var i=0; i < count; i++ ){
        sum += array[i];
    }
    return sum / count;
};
average([4,6,1,1]);

//Array contains
function contains(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
};
contains([7,55,99],99);

//Array first
function first(array){
    return array[0];
};
first([5,4,3,2,1]);

//Array last
function last(array){
  return array[array.length-1];
};
last([5,4,3,2,1]);

//Array max
function max(array){
    return Math.max.apply(null,array);
};
max([10,5,100,2,1000]);

//Array min
function min(array){
    return Math.min.apply(null,array);
};
min([10,5,100,2,1000]);

//Array shuffle
function shuffle(array) {
    var counter = array.length, rand, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        rand = array[counter];
        array[counter] = array[index];
        array[index] = rand;
    }
    return array;
};
shuffle([1,2,3,4,5,6]);

//Arrray sample
function sample(array,n){
    var output=[];
    var counter = array.length, rand, index;
    var value = array[Math.floor(Math.random() * array.length)];  
    if (n === undefined){
        return value;
    }else {
        var shuffled = array.slice(0), i = counter, min = i - n, counter;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            rand = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = rand;
        }
    return shuffled.slice(min);
    };
};

sample([1,2,3,4,5,6]));
sample([1,2,3,4,5,6],3));

//Array difference
function difference(array1, array2) {
  var output = [];
  for (var i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      output.push(array1[i]);
    }
  }
  return output;
};

difference([1, 2, 3, 4, 5], [5, 2, 10]);

//Object Pluck
function pluck(myArray, nameKey){
    for (var i=0; i < myArray.length; i++) {
        if (myArray.Keys === name) {
            return myArray[i[name]];
        }
    }
}

var stooges = [
      {name: 'moe', age: 40},
      {name: 'larry', age: 50}, 
      {name: 'curly', age: 60}]

pluck(stooges, name);



