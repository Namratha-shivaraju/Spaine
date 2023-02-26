import React from 'react'
import WorkoutForm from './WorkoutForm'

const Workout = () => {
  return (
    <section className="home section" id="workout">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <h1>Workout</h1>   
                </div>
            </div>
            <div className="body">
                <WorkoutForm />
            </div>
    </section>
  )
}

export default Workout