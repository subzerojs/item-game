class View{
  constructor (){
    this.current = {}
    this.energy = $('.energy')
    this.qty = $('.qty')
  }
  renderQuetions (){
    this.current.quetions.map(item=>{
          let tpl  = ''
          if(item.status){
                tpl  = `<div class="btn quetion qn" data-q="true" data-uid="${uid()}">${item.quetion}</div>`
          }
          else{
                tpl  = `<div class="btn quetion qn" data-q="false" data-uid="${uid()}">${item.quetion}</div>`
          }
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
      
  }

  reset(){
      $('.buttons-list').empty()
      $('.items-list').empty()
  }
}