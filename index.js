var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}

function appendKitten(name){
    return [...kittens, "Ralph"]
}

function prependKitten(name){
  
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}