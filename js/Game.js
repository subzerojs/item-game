
class Game {
  current = {
    quetions: [],
    items: [],
    item: null
  }
  #uidObj = {}
  currentQ = null
  constructor (items, options){
    this.time = options.time
    this.qty = options.qty
    this.energy = options.energy 
    this.qtyDecrement = options.qtyDecrement
    this.qtyIncrement = options.qtyIncrement
    this.energyDecrementFalseItem = options.energyDecrementFalseItem
    this.energyDecrementTrueItem = options.energyDecrementTrueItem
    this.items = items
    this.view = new View()
    this.init()
  }
  get _params (){
      return {
          time: this.time,
          qty: this.qty,
          energy: this.energy,
          qtyDecrement: this.qtyDecrement,
          qtyIncrement: this.qtyIncrement,
          energyDecrementFalseItem: this.energyDecrementFalseItem,
          energyDecrementTrueItem: this.energyDecrementTrueItem

      }

  }
  init (){
    this.setLevel()
  }
  addItem (){
    let rndItem = this.items[random(this.items.length-1)]
    let isExist = isItemExists(this.current.items, rndItem)
    if(isExist){
       this.addItem()
    }
    else{
      this.current.items.push(rndItem)
    }
  }
  createCurrentData (){
    this.current.items = []
    this.current.item = {}
    this.current.quetions = []
    for(let i=0;i<8;i++){
          this.addItem()
    }
    this.current.item = this.current.items[random(8)]
    this.current.item.quetions = quetionStringToArray(this.current.item.quetions)
    this.currentQ = new CurrentQuetions(this.current.item.quetions)
    this.current.quetions =  this.currentQ.getData()
  }
  get remainingRightQuetions (){
    let trueArr = this.current.quetions.filter(item=>item.status)
    return differenceArrayByObj(this.currentQ.currentItemAllQuetions, trueArr, 'quetion' ).sort(()=>{ return 0.5- Math.random() })
  }
  setLevel (){
    this.time = 60
    this.#uidObj = {}
    this.createCurrentData()
    //this.timer()
    this.view.render(this.current)
    this.updateValue()
  }
  get currenNotPressedQuetions(){
    return this.current.quetions.filter(item=>!item.pressed)
  }
  answerHandler (a, b, $item){
    if(a===b){
      $('.modal').css('display', 'flex')
      this.energy-=this.energyDecrementTrueItem
      this.qty+=this.qtyIncrement*this.currenNotPressedQuetions.length
    }
    else{
      $($item).css('opacity', 0)
      this.energy-=this.energyDecrementFalseItem
      if(this.energy<0){
        this.endGame()
      }
    }
    this.updateValue()
  }
  /**
   * Handlers
   */
  quetionHandler (target){
      let param = $(target).data('q')
      let quid = $(target).data('uid')
      this.current.quetions.map(q=>{
          if(q.uid===quid){
            return q.pressed = true
          }
      })
      if(!this.#uidObj.hasOwnProperty(quid)){
            if(param){
              $(target).addClass('item--true')
            }
            else{
              $(target).addClass('item--false')
            }
            this.qty-=this.qtyDecrement
      }
      this.#uidObj[quid] = param
      this.updateValue()
  }
  buyBtnHandler (){
          $('.modal-buy').css('display', 'flex')
          $('.modal-buy__msg .buy-items').html('')
          this.remainingRightQuetions.map(item=>{
                let tpl = `<div class="btn" data-value="${item.quetion}">???</div>`
                $('.modal-buy__msg .buy-items').append(tpl)
          })
  }
  buyQuetionHandler (target){
        let trueObj = { status: true, quetion: $(target).data('value'), uid: uid(), pressed: true }
        $(target).css('opacity', 0)
        this.current.quetions.push(trueObj)
        this.qty-=this.qtyDecrement
        this.view.render(this.current)
        this.updateValue()
        $('.modal-buy').fadeOut()
  }

  endGame (){
    alert('Game Over')
   // $('.modal__msg').html('Проиграл')
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
