function countValue(arr) {
  let a = [],
    prev;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
    }
    prev = arr[i];
  }
  return a.length;

  //   const tempVar = []
  // for (const item of arr) {
  // 	if(!tempVar.includes(item)) {
  //   	tempVar.push(item)
  //   }
  // }
  // return tempVar.length
}

countValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
