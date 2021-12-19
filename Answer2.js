function Average(array,avg){
  let arrayA = 0
  let arrayB = array.length -1
  
  while(arrayA < arrayB){
    let rata = (array[arrayA] + array[arrayB])/2
    // console.log(rata)
    if(rata == avg){
      return true
    }
    
  }
  return false
}

console.log(Average([-1, 0, , 3, 4, 5, 6], 4.1))
console.log(Average([1, 2, 3], 2.5))
console.log(Average([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))