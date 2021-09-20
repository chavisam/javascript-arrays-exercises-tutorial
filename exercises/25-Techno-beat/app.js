

function lyricsGenerator(array){
    
   var music = '';
    var y = 0;

    for(let i=0 ; i< array.length ; i++){

        

        if(array[i] == 1 && y < 2){
            
        music = music + 'Drop the base '
        y = y + 1
        }
        else if (array[i] == 1 && y == 2) { 
            music = music + 'Drop the base !!!Break the base!!! '
                y=0
             }
        else {
            music = music + 'Boom '
        }
        
        

       
    }

    return music
}


console.log(lyricsGenerator([0,0,1,1,0,0,0]).trim())
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]).trim())
console.log(lyricsGenerator([0,0,0]).trim())
console.log(lyricsGenerator([1,0,1]).trim())
console.log(lyricsGenerator([1,1,1]).trim())