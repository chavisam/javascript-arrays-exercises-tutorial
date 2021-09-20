let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(array){
  var total = 0;
  var state = {
    totalSlots : 0,
    availableSlots : 0,
    occupiedSlots : 0
  }

    //Bucle que recorre el primer array
      for(var i=0; i< parking_state.length; i++) {
    //Bucle que recorre el array que está en la posición i
     for(var j=0; j<3; j++) {

        if(array[i][j] == 1)
         state.occupiedSlots = state.occupiedSlots + 1;
         

        if(array[i][j] == 2)
          state.availableSlots = state.availableSlots + 1

        if(array[i][j] == 1 || array[i][j] == 2)
          total++
        

      }

      state.totalSlots = total
    }


  return state
}




console.log(getParkingLotState(parking_state))