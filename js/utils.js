function isItemExists(items, item){
  let index = items.indexOf(item)
  if(index>1){
    return true
  }
  return false
}


function quetionStringToArray(str){
  return str.split(',').map(item=>{
                let ti = item.trim()
                let chars = ti.split('')
                chars[0] = chars[0].toUpperCase()
                return chars.join('')+'?'
         })
}


function random(max, min=1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}