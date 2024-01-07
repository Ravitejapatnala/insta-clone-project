import React, { useState } from "react";
import "./MainComponent.css";
import { Grid } from "@material-ui/core";
import StatusBar from "../StatusBar/Statusbar";
import MainPage from "../MainPage/MainPage";
import Info from "../InfoSection/Info";
import Suggestion from "../Suggestions/Suggestion";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MainComponent=()=>{

    let{token, setToken}= useContext(UserContext)

    const navigate= useNavigate()

    async function logout(){
        try{
            const response= await axios.delete("https://instagram-express-app.vercel.app/api/auth/logout", {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
        alert("Logout Successful")
        localStorage.removeItem("token")
        setToken("")
        navigate("/login")
        }
        catch(error){
            console.log(error.response.data.message)
        }
    }

    return(
        <div>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                    <div>
                        <StatusBar/>
                        <MainPage/>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <Info/>
                    <Suggestion/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            <div className="logout">
                <button className="logout_button" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default MainComponent;