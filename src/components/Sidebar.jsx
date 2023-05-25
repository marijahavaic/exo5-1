import React from "react";

const Sidebar = ({ profiles, handleClick }) => {
    return (
        <div className="aside">
            {profiles.map((profile) => (
                <button
                    id={profile.id}
                    onClick={() => handleClick(profile.name)}
                >
                    {profile.name.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
