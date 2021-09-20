var _people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
  //your code here
  let newArray = [];
  for (let i = 0; i < _people.length; i++){
    if (_people[i] != personName){
      newArray.push(_people[i])
    }
  }
  return newArray
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
