function isItemExists(items, item){
  return JSON.stringify(items).includes(JSON.stringify(item))

}


function quetionStringToArray(str){
  return str.split(',').map(item=>{
                let ti = item.trim()
                let chars = ti.split('')
                chars[0] = chars[0].toUpperCase()
                return chars.join('').trim()+'?'
         })
}


function random(max, min=1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


/**
 * UID
 */

let _id_counter = 0
function uid() {
  return (_id_counter++).toString(36) +  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36)
}




function difference(arrayA, arrayB){
  return arrayA
             .filter(num => !arrayB.includes(num))
             .concat(arrayB.filter(num => !arrayA.includes(num)));
}



function differenceArrayByObj (arrayA, arrayB, key){
  return arrayA.filter(({ [key]: value1 }) => !arrayB.some(({ [key]: value2 }) => value2 === value1));
}
