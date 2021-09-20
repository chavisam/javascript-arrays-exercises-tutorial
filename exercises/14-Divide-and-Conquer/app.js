let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

function mergeTwoList(array){

    var odd = [];
    var even = [];

    for (let i=0 ; i< array.length ; i++){

        if(array[i] %2 != 0) odd.push(array[i])
    }

    for (let i=0 ; i< array.length ; i++){

        if(array[i] %2 == 0) even.push(array[i])
    }

    const Array_final = odd.concat(even);

    return Array_final
}


console.log(mergeTwoList(list_of_numbers))
