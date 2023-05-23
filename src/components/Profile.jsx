import React from "react";

const Profile = ({ profile }) => {
    return (
        <div>
            <h2>{profile.jobTitle}</h2>
            <span>{profile.name}</span>
            <p>{profile.age}</p>
            <li>{profile.description}</li>
        </div>
    );
};

export default Profile;
