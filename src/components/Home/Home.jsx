import React from "react";
import "./home.css";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <h1>Home</h1>   
                </div>
            </div>
            <div className="body">
                <button className="round_button" id="connect" type="button">
                    <p>
                        +
                    </p>
                </button>
            </div>
        </section>
    )
}

export default Home