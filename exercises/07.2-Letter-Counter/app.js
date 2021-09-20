let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

let array_without_spaces = par.replace(/\s+/g,"");
let arrayletters = array_without_spaces.split("");

for(let i= 0 ; i<arrayletters.length ; i++){

    const letter = arrayletters[i].toLowerCase();

    if(counts[letter] == undefined) counts[letter] = 1;
    else counts[letter]++;

}

 //  console.log(arrayletters);


console.log(counts);