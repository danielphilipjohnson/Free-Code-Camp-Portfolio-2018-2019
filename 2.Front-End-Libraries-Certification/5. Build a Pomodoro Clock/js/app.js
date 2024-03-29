/**
 * Free Code camp Javascript Pomodoro.

 * @module Pomodoro
 * @version 1.0.0
 * @author Daniel Philip Johnson <daniel-philip-johnson@outlook.com>
 */

// Required DOM elements
var clockTimer = document.getElementById("clock-timer");

var breakTimerElem = document.getElementById("break-timer");

var startButton = document.getElementById("start");

var resetButton = document.getElementById("reset");

//Global Timer and break
var timerRunning = true;

var breakRunning = false;

var pausedTime = 0;

var toggled = false;

var reset = false;


var breakBackgroundColor = "background-color: rgb(73, 143, 193);";

var startBackgroundColor = "background-color: rgb(240, 91, 86)";

// create a variable

/**
 * Display equation and result to UI
 * @module Pomodoro
 * @method secondsToHms
 * @param {number} d
 * @param {clockTimer} displayToUpdate
 * @return {number} Value
 */

function secondsToHms(d, displayToUpdate) {
  d = Number(d);

  var m = Math.floor((d % 3600) / 60);

  var s = Math.floor((d % 3600) % 60);
  var formattedTime =
    "" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  displayToUpdate.textContent = formattedTime;
  return formattedTime;
}

/**
 * Runs breaktimer
 * @module Pomodoro
 * @method breakTimer
 * @param {number} breakLength
 */
function breakTimer(breakLength) {


  var breakLength = pausedTime === 0 ? breakLength : pausedTime;
  var refreshIntervalId = setInterval(function () {

    // secondsToHms(breakLength, breakTimerElem);

    secondsToHms(breakLength, clockTimer);
    breakLength--;

    /* If break ends stop the timer and change the button text to start */
    if (breakLength < 0) {
      pausedTime = 0;
      clearInterval(refreshIntervalId);

      startButton.innerText = "Start";
      timerRunning = false;

    } else if (breakRunning === false) {
      pausedTime = breakLength;
      clearInterval(refreshIntervalId);
    }

    else if (toggled) {
      clearInterval(refreshIntervalId);
      startButton.innerText = "Start Break";
      pausedTime = 0;
    }

  }, 1000);
}

/**
 * ToggleTimer between modes
 * @module Pomodoro
 * @method toggleTimer
 * @param {number} counter
 * @param {number} breakLength
 * @param {number} start
 */

function toggleTimer(counter, breakLength, start) {
  // if paused is equal to zero then the timer hasnt been paused used the value of the session length

  var counter = pausedTime === 0 ? counter : pausedTime;

  var breakLength = breakLength;

  function runTimer() {
    var formattedWorkTime = secondsToHms(counter, clockTimer);

    // update page title
    document.title = formattedWorkTime + " - Time to work";

    var Breakformatted = secondsToHms(breakLength, breakTimerElem);
    counter--;

    if (counter < 0) {
      clearInterval(refreshIntervalId);

      // update page title and change background
      document.title = Breakformatted + " - Time for a break";
      document.body.style = breakBackgroundColor;

      startButton.innerText = "Stop Break";

      breakRunning = true;

      timerRunning = false;

      pausedTime = 0;
      // maybe run set timeout so there a bit of a break inbetween
      breakTimer(breakLength);
    }


    else if (timerRunning === false) {
      pausedTime = counter;

      clearInterval(refreshIntervalId);
    }

    // sliders toggled stop time
    else if (toggled) {

        
      pausedTime = 0;
      clearInterval(refreshIntervalId);

      startButton.innerText = "Start";

    }
  }

  if (start) {
    var refreshIntervalId = setInterval(function () {
      if (reset) {

        reset = false;
        pausedTime = 0;
        startButton.textContent = "Stop";
        counter = pausedTime === 0 ? counter : pausedTime;
        clearInterval(refreshIntervalId);
        runTimer();
      } else {
        runTimer();
      }
    }, 1000);
  }
}

/**
 * Start button onClick
 * @module Pomodoro
 * @event startButton
 * @param {number} counter
 * @param {number} breakLength
 * @param {number} start
 * change colors here
 */
startButton.addEventListener("click", function () {
  // get session length and break length
  var sessionLength =
    parseInt(document.getElementById("session-length").innerText) * 60;

  /* maybe change to the circle */
  var breakLength =
    parseInt(document.getElementById("break-length").innerText) * 60;

  /**
   * Start button is pressed
   * users isnt on break
   * and toggle is false
   */
  if (this.innerText === "Start") {
    // create a variable
    document.body.style = startBackgroundColor;

    this.innerText = "Stop";

    timerRunning = true;

    breakRunning = false;

    toggled = false;

    toggleTimer(sessionLength, breakLength, timerRunning);

  } else if (this.innerText === "Stop") {

  /**
   * If stop button is pressed
   * stop the timer
   */
    timerRunning = false;
    breakRunning = false;

    this.innerText = "Start";

    /**
     * If its time to start break
     * stop the timer
     */

  } else if (this.innerText === "Start Break") {

 
    timerRunning = false;

    breakRunning = true;

    toggled = false;

    this.innerText = "Stop Break";

    breakTimer(breakLength);
    /**
        * Stop the break
  
    */
  } else if (this.innerText === "Stop Break") {
    timerRunning = false;
    breakRunning = false;
    toggled = false;
    this.innerText = "Start Break";
  }
});

function sliderButtons(minusButton, plusButton, lengthOfTime, displayElem) {
  // requires checks no more than 25 mins no less than zero

  var minusButton = document.getElementById(minusButton);

  var plusButton = document.getElementById(plusButton);

  minusButton.addEventListener("click", function () {
    var valueButton = document.getElementById(lengthOfTime);

    var sessionLength = parseInt(valueButton.innerText);
    console.log(sessionLength);
    if (sessionLength <= 1) {
      valueButton.innerText = 1;
    } else {
      console.log(displayElem);
      sessionLength = sessionLength - 1;

      secondsToHms(sessionLength * 60, displayElem);

      valueButton.innerText = sessionLength;
      pausedTime = 0;
      toggled = true;
    }
  });

  plusButton.addEventListener("click", function () {
    var valueButton = document.getElementById(lengthOfTime);

    var sessionLength = parseInt(valueButton.innerText);
    if (sessionLength >= 25) {
      valueButton.innerText = 25;
    } else {
      console.log(displayElem);
      sessionLength = sessionLength + 1;
      pausedTime = 0;
      console.log(sessionLength);
      valueButton.innerText = sessionLength;
      secondsToHms(sessionLength * 60, displayElem);

      toggled = true;
    }
  });
}

sliderButtons(
  "minus-break-session",
  "plus-break-session",
  "break-length",
  breakTimerElem
);
sliderButtons("minus-session", "plus-session", "session-length", clockTimer);

resetButton.addEventListener("click", function () {
  // get session length and break length
  var sessionLength =
    parseInt(document.getElementById("session-length").innerText) * 60;

  var breakLength =
    parseInt(document.getElementById("break-length").innerText) * 60;

 

  //Hit start button run timer
  // break is false
  // toggle is false user has selected a time
  if (this.innerText === "Reset") {
    var breakLength =
      parseInt(document.getElementById("break-length").innerText) * 60;
    //how do i put a zero before

    timerRunning = true;

    breakRunning = false;

    toggled = false;
    pausedTime = 0;
    reset = true;
    formattedTime;
    startButton.innerText = "Start";

    toggleTimer(sessionLength, breakLength, timerRunning);
  }
});
