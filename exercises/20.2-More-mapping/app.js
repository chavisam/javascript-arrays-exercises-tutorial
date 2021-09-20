

var myNumbers = [23,234,345,4356234,243,43,56,2];

function myFunction (value){
    value = value *3
    return value
}

var newArray = myNumbers.map(myFunction)

console.log(newArray);