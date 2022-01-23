
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
  qtyDecrement = 15
  qtyIncrement = 7
  energyDecrementFalseItem = 50
  energyDecrementTrueItem = 5
  constructor (items){
    this.items = items
    this.view = new View()
    this.init()
  }
  init (){
    this.addEventLiteners()
    this.addDebugEventLiteners ()
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
    this.updateValue()
  }
  checkAnswer (a, b, $item){
    if(a===b){
      $('.modal').css('display', 'flex')
      this.energy-=this.energyDecrementTrueItem
    }
    else{
      $($item).css('opacity', 0)
      this.energy-=this.energyDecrementFalseItem
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
        _this.qty+=_this.qtyIncrement
       
      }
      else{
        $(this).addClass('item--false')
        _this.qty-=_this.qtyDecrement
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
   // $('.modal__msg').html('Проиграл')
  }
  addDebugEventLiteners(){
    let _this = this
    // qty
   $( ".param-qty" ).on('change keyup', function (){
        _this.qty = +this.value;
        _this.updateValue()
   })
    // energy
    $( ".param-energy" ).on('change keyup', function (){
        _this.energy = +this.value;
        _this.updateValue()
    })
    // setValue


    $( ".qtyIncrement" ).on('change keyup', function (){
        _this.qtyIncrement = +this.value; 
    })
    $( ".qtyDecrement" ).on('change keyup', function (){
        _this.qtyDecrement = +this.value; 
    })
    $( ".energyDecrementFalseItem" ).on('change keyup', function (){
        _this.energyDecrementFalseItem = +this.value; 
    })
    $( ".energyDecrementTrueItem" ).on('change keyup', function (){
        _this.energyDecrementTrueItem = +this.value; 
    })
  }

  updateValue(){
    this.view.energy.html(this.energy)
    this.view.qty.html(this.qty)
    $( ".param-qty" ).val(this.qty)  
    $( ".param-energy" ).val(this.energy)  
    $('.current-word').html(this.current.item.name)
    $( ".qtyIncrement" ).val(this.qtyIncrement)
    $( ".qtyDecrement" ).val(this.qtyDecrement)
    $( ".energyDecrementFalseItem" ).val(this.energyDecrementFalseItem)
    $( ".energyDecrementTrueItem" ).val(this.energyDecrementTrueItem)
  }
}

var game = new Game(gameItems)




function checkCollide(){
  //gameQuetions.indexOf()
}




/**
 * TODO
 */

/**
 
ITEMS Buttons совподения предметов

Вопросы в боковой панели, необходимо исключить правильные из всех

остальных.



 */