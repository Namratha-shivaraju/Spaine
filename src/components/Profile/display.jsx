import React from 'react'
import { UilClock } from '@iconscout/react-unicons';
import './display.css'

function Display() {
  return (
    <div className='content'>
            <div className="portfolio_container container grid">
                <div className='trainn_time'>
                        <UilClock />
                        <p>Training Time</p>
                        <p>20 mins</p>
                </div>
                <div className="workout">
                        <p>Squats</p>
                        <p>180 times</p>
                </div>
                <div className='cal'>
                        <div className="circle">
                            <p>510</p>
                            <p>Cals</p>
                        </div>
                </div>
            </div>
          </div>
  )
}

export default Display