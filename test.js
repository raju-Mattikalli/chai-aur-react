const arr= [1,1,2, 3, 4,5,6,6, 6 ,7,7 , 9]

const minArr =(arr) => {
  let min= arr[0]
  arr.map((arr) => {
    arr  < min ? (min=arr) : min
  } )
  return min
}
console.log(minArr)







// const Dup = arr.filter((ele , index , arr) => arr.indexOf(ele) != index)
// console.log(Dup)