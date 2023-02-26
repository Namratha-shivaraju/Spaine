import React from 'react'
import { useState } from 'react';
import "./navbar.css";
import { UilHome } from '@iconscout/react-unicons'
import { UilDumbbell } from '@iconscout/react-unicons'
import { UilHeartbeat } from '@iconscout/react-unicons'
import { UilUserCircle } from '@iconscout/react-unicons'
import { UilAlignJustify } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

export const NavBar = () => {
  const[Toggle, showMenu] = useState(false);
    return(
        <header className="header">
            <nav className="nav container">
                <a href="/Spaine/" className="nav_logo">sPAINe</a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list_grid">
                        <li className="nav_item">
                            <a href="/Spaine/home" className="nav_link">
                                <UilHome/> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="/Spaine/workout" className="nav_link">
                                <UilDumbbell/> Workout
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="/Spaine/goals" className="nav_link">
                                <UilHeartbeat/> Goals
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="/Spaine/profile" className="nav_link">
                                <UilUserCircle/> Profile
                            </a>
                        </li>
                    </ul>
                    <div className='nav_close'>
                        <UilTimes onClick={() => showMenu(!Toggle)} />
                    </div>
                </div>
                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <UilAlignJustify/>
                </div>
            </nav>

        </header>
        
    )
}