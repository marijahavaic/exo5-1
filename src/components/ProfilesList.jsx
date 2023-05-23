import { useState } from "react";
import Profile from "./Profile";

const ProfilesList = () => {
    const [profiles, setProfiles] = useState([
        {
            jobTitle: "Webdesigner",
            name: "Mathilde",
            age: 34,
            description:
                "Ancienne i.t et graphiste de formation, je me forme au metier de developpeuse web",
        },
        {
            jobTitle: "Web Developer",
            name: "Fabiola",
            age: 40,
            description:
                "Je suis passionnée de Web Design et d’ Animation. Je suis étudiante au sein de Web Force par le biais de Social Builder",
        },
        {
            jobTitle: "Student",
            name: "Amanda",
            age: 40,
            description:
                "Je suis passionné de html, css et js. Je pratique le développement web depuis 3 mois. Je suis à la recherche d'un stage pour le mois de Sep/2023 et aime partager mes connaissances avec des nouveaux adeptes du code.",
        },
        {
            jobTitle: "student",
            name: "Li",
            age: 28,
            description: "aime coder, en formation avec WEBforce à nanterre.",
        },

        {
            jobTitle: "student",
            name: "isabelle",
            age: 37,
            description:
                "passionné de Javascrpt. J en formation chez Webforce 3et j'aime apprendre  à coder .",
        },
        {
            jobTitle: "Etudiante",
            name: "Aurélie",
            age: 36,
            description: "Je souhaite devenir développeuse full stack.",
        },
        {
            jobTitle: "student",
            name: "meryem",
            age: 30,
            description:
                "Infirmière de base, je suis en reconversion professionnelle afin de devenir developpeuse web",
        },
        {
            jobTitle: "Student",
            name: "Samia",
            age: 32,
            description:
                "Je suis attirée par le front-end et souhaite me spécialiser dans ce domaine. Je suis étudiante Webforce3",
        },
        {
            jobTitle: "student",
            name: "Dalina",
            age: 36,
            description: "Inspire à devenir développeuse web.",
        },

        {
            jobTitle: "student",
            name: "sira",
            age: 21,
            description:
                "passionnée et a l'écoute, je suis curieuse et j'apprend vite, je suis en formation pour être developper full stack.",
        },
        {
            jobTitle: "student",
            name: "Marija",
            age: 29,
            description:
                "Je suis passionné de Javascript et React. J'apprends le développement web depuis 2 ans. ",
        },
    ]);

    const [clickedProfile, setClickedProfile] = useState([]);

    const showProfile = (name) => {
        const clickedProfile = profiles.filter((profile) => {
            return profile.name === name;
        });
        setClickedProfile(clickedProfile);
    };

    return (
        <div id="ProfilesList">
            <div className="aside">
                {profiles.map((profile) => (
                    <button
                        id={profile.id}
                        onClick={() => showProfile(profile.name)}
                    >
                        {profile.name.toUpperCase()}
                    </button>
                ))}
            </div>
            {clickedProfile.map((profile) => (
                <Profile profile={profile} />
            ))}
        </div>
    );
};

export default ProfilesList;
