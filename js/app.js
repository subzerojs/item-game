

var options = {
  time: 60,
  qty: 1900,
  energy: 300,
  qtyDecrement: 15,
  qtyIncrement: 7,
  energyDecrementFalseItem: 50,
  energyDecrementTrueItem: 5,
  quetionPrice: 250,
  energyDecrementHideTrueItem: 100,
  descriptionPrice: 30
}

var game = new Game(gameItems, load()||options)

/**
 * Quetions
 */
$('.buttons-list').on('click', '.quetion', function (e){
      game.quetionHandler(this)
})
/**
 * Items
 */
$('.items-list').on('click', '.quetion', function (e){

    if(e.target.className==='item--hide'){
        $(this).css('opacity', 0)
        game.checkHiddenItemAgainstCurrentItem($(this).data('name') )
    }
    else{
        game.answerHandler(game.current.item.name, $(this).data('name') , this)
    }    
})
$('.modal__round-lost .btn').on('click', function (){
    game.setLevel()
    $('.modal__round-lost').fadeOut()
})


$('.modal .btn').on('click', function (){
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
 * Description
 */
$('.item-description__btn svg').on('click', function (){
    
     game.buyDescriptionHandler()

})


/**
 * _param settings
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

//price qietion
$('.quetion-price-input').on('change keyup', function (){
    game.quetionPrice = +this.value; save(game._params)
    game.updateValue()
})
$( ".energyDecrementHideTrueItem" ).on('change keyup', function (){
    game.energyDecrementHideTrueItem = +this.value; save(game._params) 
})

$( ".descriptionPrice" ).on('change keyup', function (){
    game.descriptionPrice = +this.value; save(game._params) 
})


/**
 * game-over
 */

$('.modal-game-over').on('click', function (){
    game.resetData ()
    game.setLevel()

    $('.modal-game-over').fadeOut()
})

