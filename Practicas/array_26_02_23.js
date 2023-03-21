const oldArray = [1,2,3,4,5]
console.log("🚀 ~ file: array_26_02_23.js:2 ~ oldArray:", oldArray)
const newArray = [... oldArray, 6,7,8,9,10]
console.log("🚀 ~ file: array_26_02_23.js:3 ~ newArray:", newArray)


const oldObj = {
    name : 'Fanny'
}
console.log("🚀 ~ file: array_26_02_23.js:10 ~ oldObj:", oldObj)

const newObj = {
    ... oldObj,
    lastname: 'Mayorga',
    age: 24
}

console.log("🚀 ~ file: array_26_02_23.js:18 ~ newObj:", newObj)