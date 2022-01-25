

var options = {
  time: 60,
  qty: 1900,
  energy: 300,
  qtyDecrement: 15,
  qtyIncrement: 7,
  energyDecrementFalseItem: 50,
  energyDecrementTrueItem: 5,
  quetionPrice: 50
}

var game = new Game(gameItems, load()||options)

$('.buttons-list').on('click', '.quetion', function (){
      game.quetionHandler(this)
})



// items
$('.items-list').on('click', '.quetion', function (){
    game.answerHandler(game.current.item.name, this.innerHTML, this)
})

$('.modal__msg .btn').on('click', function (){
    game.setLevel()
    $('.modal').fadeOut()
})
$('.modal-buy .btn').on('click', function (){
    game.setLevel()
    $('.modal-buy').fadeOut()
})
$('.modal-buy__close').on('click', function (){
    $('.modal-buy').fadeOut()
})

    // buy
$('.quetions .buy').on('click', function (){
    game.buyBtnHandler()
})

$('.modal-buy__msg .buy-items').on('click', '.btn', function (){
    game.buyQuetionHandler(this)
})

/**
 * _param
 */
// qty
$( ".param-qty" ).on('change keyup', function (){
    game.qty = +this.value; save(game._params)
    game.updateValue()
})
// energy
$( ".param-energy" ).on('change keyup', function (){
    game.energy = +this.value; save(game._params)
    game.updateValue()
})
// setValue

$( ".qtyIncrement" ).on('change keyup', function (){
    game.qtyIncrement = +this.value;  save(game._params)
})
$( ".qtyDecrement" ).on('change keyup', function (){
    game.qtyDecrement = +this.value; save(game._params) 
})
$( ".energyDecrementFalseItem" ).on('change keyup', function (){
    game.energyDecrementFalseItem = +this.value;  save(game._params)
})
$( ".energyDecrementTrueItem" ).on('change keyup', function (){
    game.energyDecrementTrueItem = +this.value; save(game._params) 
})


$('.quetion-price-input').on('change keyup', function (){
    game.quetionPrice = +this.value; save(game._params)
    game.updateValue()
})