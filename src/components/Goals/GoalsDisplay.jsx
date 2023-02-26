import React from 'react'
import DatePicker from "react-horizontal-datepicker";
import "./goals.css"
import { UilClock } from '@iconscout/react-unicons'
import { UilHeartbeat } from '@iconscout/react-unicons'


function GoalsDisplay() {
    
    const selectedDay = (val) => {
        console.log(val);
      };
      return (
        <div className="date">
          <DatePicker
            getSelectedDay={selectedDay}
            labelFormat={"MMMM"}
            color={"#AC73FF;"}
          />
          <div className='content'>
            <h3>Analytics</h3>
            <div className="portfolio_container container grid">
              <div className='train_time'>
              <UilClock />
                <p>Training Time</p>
                <p>20 mins</p>
              </div>
              <div className='active-energy'>
                <UilHeartbeat />
                <p>Active Energy</p>
                <p>350 cals</p>
              </div>
              
            </div>
          </div>
        </div>
      );
}

export default GoalsDisplay