const nameArray = ['mario', 'ryu', 'chun-li', 'ryu']
console.log(nameArray)

// 중복 허용 x 
/*const nameSet = new Set(nameArray)
console.log(nameSet)

//새로운 배열로 생성 
const uniqueNames = [...nameSet]*/

//간단하게 한줄로 적을 수도 있음
const uniqueNames = [... new Set(nameArray)]
console.log(uniqueNames)

//set은 set 만의 유니크한 property 있음
const ages = new Set()
ages.add(20)
ages.add(25).add(30)//chainable
ages.delete(25)

console.log(ages, ages.size)
console.log(ages.has(20))

//remove all of it
ages.clear()
console.log(ages)

const ninjas = new Set([
  { name: 'shaun', age: 30 },
  { name: 'mario', age: 32 },
  { name: 'aha', age: 33 },

])
//set 안에서 돌리기 
ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age)
})