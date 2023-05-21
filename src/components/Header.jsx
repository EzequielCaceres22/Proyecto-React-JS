import React from "react";
import imglogo from "../images/logoZooko.svg"


const Header = () => {

    return (
        <div>
            <img src={imglogo} alt={"logo"} className="Header"/>
        </div>
    )
}

export default Header;