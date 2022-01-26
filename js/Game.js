
class Game {
  current = {
    quetions: [],
    items: [],
    item: null
  }
  #uidObj = {}
  currentQ = null
  constructor (items, options){
    this.options = options
    this.time = options.time
    this.qty = options.qty
    this.energy = options.energy 
    this.qtyDecrement = options.qtyDecrement
    this.qtyIncrement = options.qtyIncrement
    this.energyDecrementFalseItem = options.energyDecrementFalseItem
    this.energyDecrementTrueItem = options.energyDecrementTrueItem
    this.quetionPrice = options.quetionPrice
    this.energyDecrementHideTrueItem = options.energyDecrementHideTrueItem
    this.descriptionPrice = options.descriptionPrice
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
          energyDecrementTrueItem: this.energyDecrementTrueItem,
          quetionPrice: this.quetionPrice,
          energyDecrementHideTrueItem: this.energyDecrementHideTrueItem,
          descriptionPrice: this.options.descriptionPrice
      }

  }
  init (){

    this.setLevel()

  }
  addItem (){
    let rndItem = this.items[random(this.items.length)]
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
  /*
  get remainingRightQuetions (){
    let trueArr = this.current.quetions.filter(item=>item.status)
    return differenceArrayByObj(this.currentQ.currentItemAllQuetions, trueArr, 'quetion' ).sort(()=>{ return 0.5- Math.random() })
  }*/
  get remainingQuetions (){
      let _gameQuetion = gameQuetions.map(item=>{return {quetion: item}})
      return differenceArrayByObj(_gameQuetion, this.current.quetions, 'quetion' ).sort(()=>{ return 0.5- Math.random() })
  }
  setLevel (){

    this.view.quetionPrice.html(this.quetionPrice)

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
      if(this.energy<=0){
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
            if(this.qty<=0){
                 this.endGame()
            }
      }
      this.#uidObj[quid] = param
      this.updateValue()
  }
  buyBtnHandler (){
          $('.modal-buy').css('display', 'flex')
          $('.modal-buy__msg .buy-items').html('')

          this.remainingQuetions.map(item=>{
             
                let tpl = `<div class="btn quetion qn" data-value="${item.quetion}">${item.quetion}</div>`
                $('.modal-buy__msg .buy-items').append(tpl)
          })
  }
  buyQuetionHandler (target){
        let selectedObj = null
        let val = $(target).data('value')
        if(this.currentQ.currentItemQuetions.includes(val)){
          selectedObj = { status: true, quetion: val, uid: uid(), pressed: true }
        }
        else{
          selectedObj = { status: false, quetion: val, uid: uid(), pressed: true }
        }
        
      
        

        $(target).css('opacity', 0)
        this.current.quetions.push(selectedObj)
        this.qty-=this.quetionPrice
        this.view.render(this.current)
        this.updateValue()
        $('.modal-buy').fadeOut()
  }

  endGame (){
    $('.modal-game-over').css('display', 'flex')
  }

  updateValue(){

    this.view.energy.html(this.energy)
    this.view.qty.html(this.qty)
    this.view.quetionPrice.html(this.quetionPrice)
    $( ".param-qty" ).val(this.qty)  
    $( ".param-energy" ).val(this.energy)  
    $('.current-word').html(this.current.item.name)
    $( ".qtyIncrement" ).val(this.qtyIncrement)
    $( ".qtyDecrement" ).val(this.qtyDecrement)
    $( ".energyDecrementFalseItem" ).val(this.energyDecrementFalseItem)
    $( ".energyDecrementTrueItem" ).val(this.energyDecrementTrueItem)
    $('.quetion-price-input').val(this.quetionPrice)
    $('.energyDecrementHideTrueItem').val(this.energyDecrementHideTrueItem)
    $('.descriptionPrice').val(this.descriptionPrice)
  }
  resetData (){

    this.time = this.options.time
    this.qty = this.options.qty
    this.energy = this.options.energy 
    this.qtyDecrement = this.options.qtyDecrement
    this.qtyIncrement = this.options.qtyIncrement
    this.energyDecrementFalseItem = this.options.energyDecrementFalseItem
    this.energyDecrementTrueItem = this.options.energyDecrementTrueItem
    this.quetionPrice = this.options.quetionPrice
    this.energyDecrementHideTrueItem = this.options.energyDecrementHideTrueItem
    this.descriptionPrice = this.options.descriptionPrice
  }
  checkHiddenItemAgainstCurrentItem(selectedItem){
  
    if(selectedItem===this.current.item.name){
      $('.modal__round-lost').css('display', 'flex')
      this.energy-=this.energyDecrementHideTrueItem
      this.updateValue()
    }
  }
  buyDescriptionHandler(){
    $('.item-description__btn').fadeOut()
    this.qty-=this.descriptionPrice
    this.updateValue()
  }
}
