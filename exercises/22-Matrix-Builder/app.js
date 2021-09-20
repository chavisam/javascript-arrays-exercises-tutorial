
function matrixBuilder(e){

            //Declaración del array de e posiciones
       var nuevoArray = [];
    //    Bucle para meter en cada posición otros array de e
        for(var i=0; i<e; i++) {
            nuevoArray[i] = new Array(e);
            

            for(var j=0 ; j<e ; j++){
                var RandomNumber = Math.floor(Math.random()*2);
                nuevoArray[i].splice(0,1)
                nuevoArray[i].push(RandomNumber)
            }



        }

    return nuevoArray
}

// do not change anything from this line down
console.log(matrixBuilder(5))