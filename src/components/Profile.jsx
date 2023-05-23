import React from "react";

const Profile = ({ profile }) => {
    return (
        <div>
            <h2>{profile.jobTitle}</h2>
            <span>{profile.name}</span>
            <small>{profile.age}</small>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
