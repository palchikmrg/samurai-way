import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/long-range-forecast.jpg'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;