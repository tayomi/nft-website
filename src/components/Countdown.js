import React from 'react'
import './Countdown.css'
function Countdown({timerDays, timerHours, timerMinutes, timerSeconds}) {
    
  return (
    <>
      <div className="timer-container">
        <div className="timer">
          <h4>Ends In</h4>
          <div className="clock">
            <div className='clock-moment'>
              <p>{timerDays}</p>
              <small>Days</small>
            </div>
            <div className='clock-moment'>
              <p>{timerHours}</p>
              <small>Hours</small>
            </div>
            <div className='clock-moment'>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </div>
            <div className='clock-moment'>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </div>
          </div>
          <button>Purchase</button>
        </div>
      </div>
    </>
  )
}

Countdown.defaultProps= {
  timerDays:10,
  timerHours:10,
  timerMinutes:10,
  timerSeconds:10
}

export default Countdown