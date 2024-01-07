import React from "react";
import "./Suggestion.css";
import { Avatar } from "@material-ui/core";
import suggestionsImage from "../../images/pp3.jpeg"
const Suggestion=()=>{
    return(
        <div>
            <div className="suggestion_container">
                <div className="suggestion_header">
                    <div>Suggestions For You</div>
                </div>
                <div className="suggestion_body">
                    <div className="suggestion_friends">
                        <Avatar className="suggestion_image" src={suggestionsImage}></Avatar>
                        <div className="suggestion_username">Friend 1</div>
                    </div>
                    <div className="suggestion_friends">
                        <Avatar className="suggestion_image" src={suggestionsImage}></Avatar>
                        <div className="suggestion_username">Friend 2</div>
                    </div>
                    <div className="suggestion_friends">
                        <Avatar className="suggestion_image" src={suggestionsImage}></Avatar>
                        <div className="suggestion_username">Friend 3</div>
                    </div>
                    <div className="suggestion_friends">
                        <Avatar className="suggestion_image" src={suggestionsImage}></Avatar>
                        <div className="suggestion_username">Friend 4</div>
                    </div>
                    <div className="suggestion_friends">
                        <Avatar className="suggestion_image" src={suggestionsImage}></Avatar>
                        <div className="suggestion_username">Friend 5</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Suggestion;