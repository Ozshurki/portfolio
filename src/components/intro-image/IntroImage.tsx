import React from "react";

import "./IntroImage.css";

const IntroImage:React.FC =() =>{
    return(
        <div className="intro-image">
            <img src="/images/my-photo.png" alt="my-photo"/>
        </div>
    )
}

export default IntroImage;