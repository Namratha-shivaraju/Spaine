import React from 'react'
import GoalsDisplay from './GoalsDisplay'
const Goals = () => {
  return (
    <section className="home section" id="goals">
            <div className="home_container container grid">
                <div className="home_content grid">
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