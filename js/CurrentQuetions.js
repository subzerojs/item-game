class CurrentQuetions {
  trueArr = []
  falseArr = []
  trueQuetions = []
  constructor (currentItemQuetions, currentFalseItemsQuetions){
    this.currentItemQuetions = currentItemQuetions
    this.currentFalseItemsQuetions = currentFalseItemsQuetions//difference(currentItemQuetions, gameQuetions)
    this.createTrueData()
    this.trueQuetions = this.trueArr
    this.createFalseData()

  }/*
  get currentItemAllQuetions(){
    return this.currentItemQuetions.map(item=>{
              return {status: true, quetion: item}
            })
  }/*
  addTrueItem (){
      let q = this.currentItemQuetions[ random(this.currentItemQuetions.length) ]
      if(isItemExists(this.trueArr, q)){
          setTimeout(()=>{ this.addTrueItem() }, 0)
      }
      else{
         let obj = {status: true, quetion: q, uid: uid(), pressed: false}
         this.trueArr.push(obj)
      }

  }*/
/*
  createTrueData (){
     for(let i=0;i<random(5, 4);i++){
       this.addTrueItem()
     }
  }*/
  createTrueData (){
    this.trueArr = this.currentItemQuetions
                      .sort(()=>0.5- Math.random())
                      .slice(0, random(5, 3) )
                      .map(item=>{
                          return {status: true, quetion: item, uid: uid(), pressed: false}
                      })
   
  }
  /*
  addFalseItem(){
      let commonArr = [...this.trueArr, ...this.falseArr]
      let q = this.currentFalseItemsQuetions[ random(this.currentFalseItemsQuetions.length) ]
      if(isItemExists(commonArr, q)){
          this.addFalseItem()
      }
      else{
         let obj = {status: false, quetion: q, uid: uid(), pressed: false }
         this.falseArr.push( obj )
      }
  }*/
/*
  createFalseData (){
     for(let i=0; i<(7-this.trueArr.length); i++){
         this.addFalseItem()
     }
  }*/
  createFalseData (){

    let uniqArr = Array.from( new Set(this.currentFalseItemsQuetions) )
                       .sort(()=>0.5- Math.random())
                       .filter(item=>{
                      
                          if(!this.currentItemQuetions.includes(item)){
                            return item
                          }
                       })
                       .map(item=>{
                          return  {status: false, quetion: item, uid: uid(), pressed: false }
                       })
                       .slice(0, 7-this.trueArr.length)

                       
    this.falseArr = uniqArr

  }
  getData (){

    return [...this.trueArr, ...this.falseArr].sort(()=>{ return 0.5- Math.random() })
  }
}
