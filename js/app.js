
class Game {
  index = 0
  time = 60
  qty = 1900
  energy = 300
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
    this.view.energy.val(this.energy)
    this.view.qty.val(this.qty)
    this.addEventLiteners()
    this.setLevel()
  }

  createCurrentData (){

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
    this.current.item.quetions = quetionStringToArray(this.current.item.quetions)
    this.current.quetions =  getCurrentQuetions(this.current.item.quetions)//quetionStringToArray(this.current.item.quetions).slice(0,7)

    
  }
/*
  getCurrentItem(){
    return this.items[this.index]
  }*/
  setLevel (){
    this.time = 60
    this.createCurrentData()
    //this.timer()
    this.view.render(this.current)
  }
  checkAnswer (a, b, $item){
    if(a===b){
      $('.modal').css('display', 'flex')
      this.energy-=1
    }
    else{
      $($item).css('opacity', 0)
      this.energy-=50
      if(this.energy<0){
        this.endGame()
      }
    }
    this.view.energy.val(this.energy)
  }
  addEventLiteners (){
    let _this = this
    $('.buttons-list').on('click', '.quetion', function (){
      let param = $(this).data('q')
   
      if(param){
        $(this).addClass('item--true')
        _this.qty+=5
       
      }
      else{
        $(this).addClass('item--false')
        _this.qty-=15
      }
       _this.view.qty.val(_this.qty)
    })
    $('.quetions .buy').on('click', function (){
      alert('Докупить')
    })
    // items
    $('.items-list').on('click', '.quetion', function (){
        _this.checkAnswer(_this.current.item.name, this.innerHTML, this)
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
    $( ".energy" ).keyup(function() {
      let text = $(this).val()
      if(text.length>4){
        $(this).val(0)
      }
      if( isNaN( Number(text) ) ){
        $(this).val(0)
      }
    })
    $('.modal__msg .btn').on('click', function (){
      _this.setLevel()
      $('.modal').fadeOut()
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
  endGame (){
    alert('Game Over')
  }
}

var game = new Game(gameItems)


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

function checkCollide(){
  //gameQuetions.indexOf()
}