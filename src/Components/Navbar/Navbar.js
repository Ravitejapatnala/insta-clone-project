import React from "react";
import "./Navbar.css";
import { Grid } from "@material-ui/core";
import inst_logo from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import love from "../../images/love.svg";
import Avatar from '@material-ui/core/Avatar';
import pp from "../../images/pp1.png";

const Navbar=()=>{
    return(
        <div className="nav">
            <div className="navbar_barcontent">
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <img className="navbar_logo" src={inst_logo} width="105px"></img>
                    </Grid>
                    <Grid item xs={3}>
                        <input className="navbar_search" type="text" placeholder="Search"></input>
                    </Grid>
                    <Grid item xs={3} style={{display:"flex"}}>
                        <img className="navbar_img" src={home} width="25px"></img>
                        <img className="navbar_img" src={message} width="25px"></img>
                        <img className="navbar_img" src={find} width="25px"></img>
                        <img className="navbar_img" src={love} width="25px"></img>
                        <Avatar src={pp} className="navbar_img" style={{"maxWidth":"25px", "maxHeight": "25px"}}></Avatar>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Navbar;