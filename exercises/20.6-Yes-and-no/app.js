let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

function wikifunction(params) {
    
    if(params == 0) return "woko"
    else return "wiki"

}

var FinalArray = theBools.map(wikifunction)

console.log(FinalArray)