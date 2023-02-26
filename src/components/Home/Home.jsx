import React, { useState } from "react";
import "./home.css";
import Workout from "../Workout/Workout"
const Home = () => {
    const [showComponent, setShowComponent] = useState(false);

    function handleClick() {
        setShowComponent(true);
    }
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <h1>Home</h1>   
                </div>
            </div>
            <div className="body">
                <button className="round_button" id="connect" type="button" onClick={handleClick}>
                    <a href="#workout">
                        +
                    </a>
                </button>
                {showComponent && <Workout />}
            </div>
        </section>
    )
}

export default Home