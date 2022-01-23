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

function getCurrentQuetions(currentItemQuetions){
 let trueArr = []
 for(let i=0;i<random(4, 2);i++){
   let q = currentItemQuetions[ random(currentItemQuetions.length-1) ]

   let obj = {status: true, quetion: q}
   trueArr.push(obj)
 }
 let falseArr = []
 for(let i=0;i<(7-trueArr.length);i++){
   let obj = {status: false, quetion: gameQuetions[ random(gameQuetions.length-1) ] }
   falseArr.push( obj )
 }

  let arr =  [...trueArr, ...falseArr].sort(()=>{ return 0.5- Math.random() })

  return arr
}