function isItemExists(items, item){
  return JSON.stringify(items).includes(JSON.stringify(item))

}


function quetionStringToArray(str){
  console.log(str)
  if(Array.isArray(str)){
    /*обрабатываю глюк. Какого то фига приходит массив иногда*/
    return str
  }
  else{
    return str.split(',').map(item=>{
                let ti = item.trim()

                let chars = ti.split('')
                chars[0] = chars[0].toUpperCase()
                return chars.join('').trim()+'?'
         })
  }

}


function random(max, min=0) {
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

function uniqDiff(arrayA, arrayB){
  //console.log(arrayA, arrayB)
  return arrayA.filter(x => !arrayB.includes(x));
}

function differenceArrayByObj (arrayA, arrayB, key){
  return arrayA.filter(({ [key]: value1 }) => !arrayB.some(({ [key]: value2 }) => value2 === value1));
}


function save (_param){
  localStorage.setItem('minigame-app', JSON.stringify(_param))
}

function load (){
  var _param =  localStorage.getItem('minigame-app')
  if(_param){
    return JSON.parse(_param)
  }
  return false
}