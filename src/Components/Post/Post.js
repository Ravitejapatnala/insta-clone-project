import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import post_img from "../../images/post.jpg"
import post_love from "../../images/love.svg"
import post_comment from "../../images/comment.svg"
import post_share from "../../images/share.svg"
import { useState } from "react";


const Post=()=>{

    const[comment, setComment]= useState("")
    const[addedcomment, setAddedcomment]= useState([])

    const[isLiked, setIsLiked]= useState(false);

    const handleClick=()=>{
        setIsLiked(!isLiked);
    }


    function addComment(){
        setAddedcomment([...addedcomment, comment])
        setComment("")
    }


    return(
        <div className="post_container">
            <div className="post_header">
                <Avatar src="" className="post_image"></Avatar>
                <div className="post_username">Username</div>
            </div>

            <div>
                <img src={post_img} width="613px"></img>
            </div>

            <div>
                <div style={{"marginLeft": "10px", "display": "flex"}}>
                    <div className={`image-container ${isLiked ? 'liked': ''}`}>
                        <img src={post_love} className="postreact_img" onClick={handleClick}></img>
                    </div>
                    <div>
                        <img src={post_comment} className="postreact_img"></img>
                    </div>
                    <div>
                        <img src={post_share} className="postreact_img"></img>
                    </div>
                </div>
                <div className="post_likescount" style={{"fontWeight": "bold", "marginLeft": "20px", "marginTop" : "-120px"}}>
                    1000 likes
                </div>
            </div>

            <div style={{"margin": "10px"}}>
                {
                    addedcomment.map((item)=>(
                        <div>
                            <p>{item}</p>
                        </div>
                    ))
                }
                <input type="text" placeholder="Add a comment..." className="post_addcomment" onChange={(e)=>setComment(e.target.value)} value={comment}></input>
                <p onClick={addComment} style={{"color": "#757d7d", "fontFamily" : "sans-serif", "fontWeight" : "bold", "margin" : "5px", "cursor": "pointer", "textAlign" : "end"}}>comment</p>
            </div>
        </div>
    )
}

export default Post; 