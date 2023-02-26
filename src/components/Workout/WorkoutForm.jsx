import React, { useState } from "react";
import "./workout.css"

function WorkoutForm({ addExercise }) {

  const [exercises, setExercises] = useState([]);

  function handleAddExercise() {
    const newExercise = {
      id: Date.now(),
      name: '',
      duration: '',
    };
    setExercises([...exercises, newExercise]);
  }

  function handleRemoveExercise(id) {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  }

  function handleChangeExercise(id, field, value) {
    setExercises(
      exercises.map((exercise) =>
        exercise.id === id ? { ...exercise, [field]: value } : exercise
      )
    );
  }

  return (
    <div>
      <button className="add_button" onClick={handleAddExercise}>Add Exercise</button>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <input
            className="workout_type"
            type="text"
            placeholder="Exercise name"
            value={exercise.name}
            onChange={(e) =>
              handleChangeExercise(exercise.id, 'name', e.target.value)
            }
          />
          <input
            className="time"
            type="number"
            placeholder="Duration (in minutes)"
            value={exercise.duration}
            onChange={(e) =>
              handleChangeExercise(
                exercise.id,
                'duration',
                parseInt(e.target.value)
              )
            }
          />
          <button className="remove" onClick={() => handleRemoveExercise(exercise.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );

}

export default WorkoutForm;
