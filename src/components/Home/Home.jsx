import React, { useState } from "react";
import "./home.css";
const Home = () => {
    const [device, setDevice] = useState(null);

    async function connectToDevice() {
        const options = {
          filters: [{ name: "My Bluetooth Device" }],
        };
        const device = await navigator.bluetooth.requestDevice(options);
        await device.gatt.connect();
        setDevice(device);
    }
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <h1>Home</h1>   
                </div>
            </div>
            <div className="body">
                <button className="round_button" id="connect" type="button" onClick={connectToDevice}>
                    <a href="#workout">
                        +
                    </a>
                </button>
                {device && <p>Connected to device: {device.name}</p>}
            </div>
        </section>
    )
}

export default Home