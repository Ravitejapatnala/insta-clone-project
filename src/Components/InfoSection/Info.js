import React from "react";
import "./Info.css";
import { Avatar } from "@material-ui/core";
import infoImage from "../../images/pp2.png";

const Info=()=>{
    return(
        <div>
            <div className="info_container">
                <Avatar src={infoImage} className="info_image"></Avatar>
                <div className="info_content"> 
                    <div className="info_username">Username</div>
                    <div className="info_description">Description</div>
                </div>
            </div>
        </div>
    )
}

export default Info;