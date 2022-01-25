/*
class Timer {
  #id = null
  #time = 60
  constructor (t=60){
    this.t = t
  }
  get time (){
    return #time
  }
  set time (val){
    this.t = val
    this.#time = val
  }
  start (){
    this.#id = setInterval(()=>{
                --this.time
                if(this.time===0){
                  clearInterval(int)
                  this.setLevel()
                }
                $('.timer').html(this.time)
     }, 1000)
  }
  reset(val){
    this.#time = val
  }
}

*/