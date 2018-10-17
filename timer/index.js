
class Timer{

  constructor(){
    // initializint the state of the timer
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
    };

    this.startButtonClicked = false;

    // Selecting controls that will be used to manage the timer
    this.seconds = document.querySelector('.seconds');
    this.minutes = document.querySelector('.minutes');
    this.hours = document.querySelector('.hours');

    // Selecting control buttons
    this.startButton = document.querySelector('.start');
    this.pauseButton = document.querySelector('.pause');
    this.stopButton = document.querySelector('.stop');

    // Binding events that will be attached to events;
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
  }

  // method all the logic of the timer
  tick(){

    // changing the state of the timer every each second
    this.state.second += 1;

    // logic between seconds and minutes
    if (this.state.second === 60){
      this.state.second = 0;
      this.state.minute += 1;
    }

    // Logic between minutes and hours
    if (this.state.minute === 60){
      this.state.minute = 0;
      this.state.hour += 1;
    }
    if (this.state.hour === 24){
      alert('You timer ran for too long');
    }
    this.render();
  }

  // method that will be invoked if the start button in clicked
  start(){
    // Capture the text content of the start button
    let startText = this.startButton.textContent;

    // Check if we need to restart the counter
    if (startText === 'Restart'){
      this.state ={second:0, minute:0, hour: 0};
    }
   
    if (startText === 'Continue' || startText === 'Restart'){
      this.startButton.textContent = 'Start';     
     }
      this.interval = setInterval(() => this.tick(), 1000);
  }
  // method that will be invoked if the pause button in clicked
  pause(){
    clearInterval(this.interval);
    this.startButton.textContent = 'Continue';
    this.render();
    this.startButton.addEventListener('click', this.start, {once:true});
  }

  // method that will be invoked if the stop button in clicked
  stop(){
    this.startButton.textContent = 'Restart';
    clearInterval(this.interval);
    this.render();
    // readding the listener to the start button
    this.startButton.addEventListener('click', this.start, {once:true});
  }

  // updating the html pages according to the states of the timer
  render(){
    // Assigning variable to the properties of the timer state
    let second = this.state.second;
    let minute = this.state.minute;
    let hour = this.state.hour;

    // Render the state of the timer prepending a zero when the value
    // is less that 10
    this.seconds.textContent = second < 10 ? '0' + second : second;
    this.minutes.textContent = minute < 10 ? '0' + minute : minute;
    this.hours.textContent = hour <  10 ? '0' + hour : hour;
  }

  // Add event listener for the start button click
  events(){
    // add a click event to the start button 
    // Add the option once to prevent many clicks on the start button
    // that would speed the clock.
    this.startButton.addEventListener('click', this.start, {once:true});

    // add a click evnet to the pause button
    this.pauseButton.addEventListener('click', this.pause);

    // add a click event ot the stop button
    this.stopButton.addEventListener('click', this.stop)

  }
  
}

let mytimer = new Timer();
mytimer.events();