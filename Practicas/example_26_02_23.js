function transformToObjects(numberArray) {
    let hola = [];
    numberArray.map((num)=>{
        let aver = {val:num};
        hola = [... hola, aver]
    })
    return hola;
}
const array = [1,2,3]
const na = transformToObjects(array);
console.log("🚀 ~ file: example_26_02_23.js:10 ~ na:", na)

function transformToObjects01(numberArray) {
    return numberArray.map(number => {
     return {val: number}
    });
 }

const na01 = transformToObjects01(array);
console.log("🚀 ~ file: example_26_02_23.js:20 ~ na01:", na01)