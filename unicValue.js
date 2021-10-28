function counterNum(array){
  let num = [], newNum;
  
  for(let i=0; i<array.length; i++){
    if(array[i] != newNum){
      num.push(array[i]);
    }
    newNum = array[i]
  }
  return num.length
}

counterNum([1,2,3,4,4,4,7,7,12,12,13])
counterNum([1,2,2,2,2,2,2,4,6])
counterNum([])

countValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
