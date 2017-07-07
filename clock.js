// 1. Create a Date object.
// 2. Store the hours, minutes, and seconds.
// 3. Call printTime.
// 4. Schedule the tick at 1 second intervals.
class Clock {
  constructor() {
    const currentTime = new Date();
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    this.printTime();
    setInterval(this._thick.bind(this),1000);
  }

  // Format the time in HH:MM:SS
  // Use console.log to print it.
  printTime(){
  console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }
  // 1. Increment the time by one second.
  // 2. Call printTime.
  _tick(){
    this._incrementSeconds();
    this.printTime();
  }
    _incrementSeconds(){
      this.seconds += 1;
      if(this.seconds === 60){
        this.seconds = 0;
        this._incrementMinutes();
      }
    }
    _incrementMinutes(){
      this.minutes += 1;
      if(this.minutes === 60){
        this.minutes = 0;
        this.incrementHours();
      }
    }

    _incrementHours(){
      this.hours = (this.hours + 1 % 60)
    }

}

const clock = new Clock()
