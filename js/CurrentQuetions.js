class CurrentQuetions {
  trueArr = []
  falseArr = []
  constructor (currentItemQuetions){
    this.currentItemQuetions = currentItemQuetions
    this.createTrueData()
    this.createFalseData()
  }
  addTrueItem (){
      let q = this.currentItemQuetions[ random(this.currentItemQuetions.length-1) ]
      if(isItemExists(this.trueArr, q)){
          this.addTrueItem ()
      }
      else{
         let obj = {status: true, quetion: q}
         this.trueArr.push(obj)
      }
  }
  addFalseItem(){
      let commonArr = [...this.trueArr, ...this.falseArr]
      let q = gameQuetions[ random(gameQuetions.length-1) ]
      if(isItemExists(commonArr, q)){
          this.addFalseItem()
      }
      else{
         let obj = {status: false, quetion: q }
         this.falseArr.push( obj )
      }
  }
  createTrueData (){
     for(let i=0;i<random(5, 3);i++){
       this.addTrueItem()
     }
  }
  createFalseData (){
     for(let i=0; i<(7-this.trueArr.length); i++){
         this.addFalseItem()
     }
  }
  getData (){
    return [...this.trueArr, ...this.falseArr].sort(()=>{ return 0.5- Math.random() })
  }
}
