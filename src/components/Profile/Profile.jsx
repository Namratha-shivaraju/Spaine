import React from "react";
import "./profile.css";
import UserAvatar from 'react-user-avatar';
import Display from "./display";

const Profile = () => {
    return (
        <section className="home section" id="profile">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <h1>Profile</h1> 
                    
                </div>
                
            </div>
            <div className="user">
                <div className="header_info">
                        <UserAvatar size="48" name="New User" />
                        <h5>New User</h5>
                </div> 
            </div>
            <div className="body">
                <Display />
            </div>
        </section>
    )
}

export default Profile
