
class App {
  constructor (quetions, items){
    this.quetions = quetions
    this.items = items
    this.addEventLiteners()
  }
  renderQuetions (){
    this.quetions.map(item=>{
            let tpl = `<div class="btn quetion">${item}</div>`
            $('.buttons-list').append(tpl)
    })
  }
  renderItems (){
    this.items.map(item=>{
            let tpl = `<div class="btn quetion">${item}</div>`
            $('.items-list').append(tpl)
    })
  }
  render(){
      this.reset()
      this.renderQuetions()
      this.renderItems()
  }
  reset(){
    $('.buttons-list').html('')
  }
  addEventLiteners (){
    $('.buttons-list').on('click', '.quetion', function (){
      alert(this.innerHTML)
    })
    $('.quetions .buy').on('click', function (){
      alert('Докупить')
    })
    $('.items-list').on('click', '.quetion', function (){
      alert(this.innerHTML)
    })
  }
}




var q = [
  'Тяжёлый?', 
  'Катится?', 
  'Железный?', 
  'Деревянный?', 
  'Электронный?',
  'Светится?',
  'Летает?'
]

var items = [
  'Стол',
  'Большой ТВ',
  'Холодильник',
  'Пуфик',
  'Диван',
  'Муз.центр',
  'Квадрокоптер',
  'Приставка'
]


var app = new App(q, items)

app.render()
