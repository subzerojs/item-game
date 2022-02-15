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

  }
  createTrueData (){
    this.trueArr = this.currentItemQuetions
                      .sort(()=>0.5- Math.random())
                      .slice(0, random(5, 3) )
                      .map(item=>{
                          return {status: true, quetion: item, uid: uid(), pressed: false}
                      })
   
  }

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
