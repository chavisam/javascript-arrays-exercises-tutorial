var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

var newArray = [];

for (let i = 0 ; i < mix.length ; i++){

    let data = typeof mix[i];

    newArray.push(data);

}

console.log(newArray);