class CurrentQuetions {
  trueArr = []
  falseArr = []
  trueQuetions = []
  constructor (currentItemQuetions){
    this.currentItemQuetions = currentItemQuetions
    this.uniqGameQuetions = difference(currentItemQuetions, gameQuetions)
    this.createTrueData()
    this.trueQuetions = this.trueArr
    this.createFalseData()

  }
  get currentItemAllQuetions(){
    return this.currentItemQuetions.map(item=>{
              return {status: true, quetion: item}
            })
  }
  addTrueItem (){
      let q = this.currentItemQuetions[ random(this.currentItemQuetions.length) ]
      if(isItemExists(this.trueArr, q)){
          setTimeout(()=>{ this.addTrueItem() }, 0)
      }
      else{
         let obj = {status: true, quetion: q, uid: uid(), pressed: false}
         this.trueArr.push(obj)
      }

  }
  addFalseItem(){
      let commonArr = [...this.trueArr, ...this.falseArr]
      let q = this.uniqGameQuetions[ random(this.uniqGameQuetions.length) ]
      if(isItemExists(commonArr, q)){
          this.addFalseItem()
      }
      else{
         let obj = {status: false, quetion: q, uid: uid(), pressed: false }
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
