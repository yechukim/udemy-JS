//rest parameter
const double = (...nums) => {
  console.log(nums)
  //... : take all the argumenst and bundle up to single paramter

  return nums.map(num => num * 2)
}
const result = double(1, 3, 2, 3, 4, 2, 3, 4, 4)
console.log(result)
//여기서는 이미 spread 되어 있으니까 그거 반대로 array로 묶어주고 


//spread syntaz ( arrays)

//여기서는 묶여있는걸 spread 해준다 
const people = ['dog', 'cat', 'lion']
//console.log(...people)
const members = ['koala', 'cute', ...people]
console.log(members)


// spread syntax(object)
const person = {
  name: 'kim',
  age: 30,
  job: 'developer'
}
//새롭게 복사할 수 있는 방법 
const personClone = { ...person, location: 'kr' }
console.log(personClone)