var _ ={

//Array average
average: function(array){
    var sum = 0;
    var count = array.length;
    for (var i=0; i < count; i++ ){
        sum += array[i];
    }
    return sum / count;
},

//Array contains
contains: function(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
},

//Array first
first: function(array){
    return array[0];
},

//Array last
last: function(array){
  return array[array.length-1];
},

//Array max
max: function(array){
    return Math.max.apply(null,array);
},

//Array min
min: function(array){
    return Math.min.apply(null,array);
},

//Array shuffle
shuffle: function(array) {
    var counter = array.length, rand, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        rand = array[counter];
        array[counter] = array[index];
        array[index] = rand;
    }
    return array;
},

//Arrray sample
sample: function(array,n){
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
},

//Array difference
difference: function(array1, array2) {
  var output = [];
  for (var i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      output.push(array1[i]);
    }
  }
  return output;
},

//Object Pluck
pluck: function(array, property){
    output = [];
    for (var i in array){
        output.push(array[i][property])
    }
    return output;
},
};

