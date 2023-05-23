import React from "react";
import imglogo from "../images/logoZooko.svg"
import global from "../images/gls.svg"


const Header = () => {

    return (
        <div>
            <div className="div-top">
                <img className="global-ico" src={global} alt="global" />
                <span className="span-style">Cel 091833348 Tel 27114413</span>
                <span className="span-style">José Ellauri 350 local 303 | Lunes a Domingos 10 a 22 hs.</span>
            </div>
            <img src={imglogo} alt={"logo"} className="Header"/>
        </div>
    )
}

export default Header;