console.log(printReverse([1,2,3,4,5,6,7]));
console.log(isUniform(["a","a","a","a","a","a","a"]));
console.log(isUniform(["a","a","b","b","c"]));
console.log(sumArray([10,5,10,4]));
console.log(max([12,34,1,99,2]));

function printReverse(array){
    var reversedArray = array.slice().reverse();
    reversedArray.forEach(function(element){
        console.log(element);
    });
}

function isUniform(array){
    for (var i = 1; i < array.length; i++){
        if (array[i-1] !== array[i]) return false;
    }
    return true;
}

function sumArray(array){
    var sum = 0;
    array.forEach(function(element){
        sum += element;
    });
    return sum;
}

function max(array){
    var max = array[1];
    for (var i = 1; i < array.length; i++){
        if (max < array[i]) max = array[i]
    }
    return max;
}

