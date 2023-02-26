import React from 'react'
import GoalsDisplay from './GoalsDisplay'
const Goals = () => {
  return (
    <section className="goal section" id="goals">
            <div className="goal_container container grid">
                <div className="goal_content grid">
                    <h1>Goal</h1>   
                </div>
            </div>
            <div className="body">
                <GoalsDisplay />
            </div>
    </section>
  )
}

export default Goals