
class View{
  constructor (){
    this.current = {}
  }
  renderQuetions (){
    this.current.quetions.map(item=>{
            let tpl = `<div class="btn quetion">${item}</div>`
            $('.buttons-list').append(tpl)
    })
  }
  renderItems (){
    this.current.items.map(item=>{
            let tpl = `<div class="btn quetion">${item.name}</div>`
            $('.items-list').append(tpl)
    })
  }
  render(current){
      this.reset()
      this.current = current
      this.renderQuetions()
      this.renderItems()
      $('.item-description').html(this.current.item.description)
      $('.answer-debug').html(this.current.item.name)
  }
  reset(){
    //this.current.quetions = []
    //this.current.items = []
    $('.buttons-list').empty()
    $('.items-list').empty()

  }

}




function random (max) {
  return Math.floor(Math.random()*max)
}
class Game {
  index = 0
  time = 60
  qty = 1900
  power = 300
  current = {
    quetions: [],
    items: [],
    item: null
  }
  constructor (items){
    this.items = items
    this.view = new View()
    this.init()
  }
  init (){
    this.addEventLiteners()
    this.setLevel()
  }

  createCurrentData (){
    console.log('rr')
    this.current.items = []
    this.current.item = {}
    this.current.quetions = []
    for(let i=0;i<8;i++){
      let rndItem = this.items[random(this.items.length-1)]
      /*let isExist = isItemExists(this.current.items, rndItem)
      if(!isExist){
        console.log('true')
      }*/
      this.current.items.push(rndItem)
    }
    this.current.item = this.current.items[random(8)]
    this.current.quetions = quetionStringToArray(this.current.item.quetions).slice(0,7)
    this.current.item.quetions = quetionStringToArray(this.current.item.quetions)
  }

  getCurrentItem(){
    return this.items[this.index]
  }
  setLevel (){
    this.time = 60
    this.createCurrentData()
    //this.timer()
    this.view.render(this.current)
  }
  checkAnswer (a, b){
    if(a===b){
      alert('Правильно')
    }

    this.setLevel()
  }
  addEventLiteners (){
    let _this = this
    $('.buttons-list').on('click', '.quetion', function (){
      alert(this.innerHTML)
    })
    $('.quetions .buy').on('click', function (){
      alert('Докупить')
    })
    // items
    $('.items-list').on('click', '.quetion', function (){
        _this.checkAnswer(_this.current.item.name, this.innerHTML)
    })
    $( ".qty" ).keyup(function() {
      let text = $(this).val()
      if(text.length>5){
        $(this).val(0)
      }
      if( isNaN( Number(text) ) ){
        $(this).val(0)
      }
    })
    $( ".power" ).keyup(function() {
      let text = $(this).val()
      if(text.length>4){
        $(this).val(0)
      }
      if( isNaN( Number(text) ) ){
        $(this).val(0)
      }
    })
  }
  timer (){
    let int = setInterval(()=>{
                --this.time
                if(this.time===0){
                  clearInterval(int)
                  this.setLevel()
                }
                $('.timer').html(this.time)
     }, 1000)
  }
  check
}

var game = new Game(gameItems)







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