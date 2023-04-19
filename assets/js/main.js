/* 
function  findMax(arr) {
    var max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max<arr[i]) {
            min = arr[i]
        }
    }
    return max;
}

console.log(findMax([6,5,7,12,87,123,12,-35])) */
/* 
function findEvenNumbers(arr) {
    var max = arr[0];
    var min = arr[1]
    for (let i = 2; i < arr.length; i+=2) {
        if (max<arr[i]) {
            max = arr[i]
        }
    }
    for (let i = 3; i < arr.length; i+=2) {
        if (min>arr[i]) {
            min = arr[i]
        }
    }
    return min+max;
}

alert(findEvenNumbers([0,2,4,5,6,7,9])) */

/* // Task-1

function findAverageOfNum(num) {
    var tek = 0;
    var count = 0;
    var sum = 0;
    while (num > 0) {
        tek = num % 10;
        num = (num - tek) / 10;
        sum += tek;
        count++;
    }
    return sum / count;
}
alert(findAverageOfNum(prompt()))
 */


/* // Task 2
function findChar(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i]==="a") {
            i++;
            if (text[i]==="l"){
                return true;
            }
        }
    }
    return false;
}
alert(findChar(prompt())) */


function findNum(text){
    for (let i = 0; i < text.length; i++) {
        var count=0;
        if(text[i]>=0){
            count++;
        }
        return count;
    }
}
alert(findNum(["salam1","sagol2","sagol","salam"]))