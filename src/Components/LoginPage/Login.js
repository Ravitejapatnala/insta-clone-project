import React from "react";
import Grid from '@material-ui/core/Grid';
import inst_image from "../../images/9364675fb26a.svg";
import inst_logo from "../../images/logoinsta.png";
import "./Login.css";
import fb from "../../images/fb.png"
import app from "../../images/app.png"
import play from "../../images/play.png"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

const Login=()=>{

    const navigate= useNavigate();

    const[user, setUser]= useState({email:"", password:""})
    const[message, setMessage]= useState("");
    const{setToken}= useContext(UserContext);

    function updateUser(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    async function implementLogin(e){
        e.preventDefault();
        try{
            const response= await axios.post("https://instagram-express-app.vercel.app/api/auth/login", {
            email:user.email,
            password: user.password
        })
        console.log(response.data.message)
        setMessage(response.data.message)
        setToken(response.data.data.token)
        navigate("/home")
        }
        catch(error){
            console.log(error.response.data.message);
            setMessage(error.response.data.message)
        }
    }
    return(
        <div>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <div className="loginpage_main">
                        <div>
                            <img src={inst_image} width="400px"></img>
                        </div>

                        <div className="loginpage_rightcomponent">
                            <img className="loginpage_logo" src={inst_logo}></img>

                            <div className="loginpage_signinform">
                                <form onSubmit={implementLogin}>
                                    <input className="loginpage_text" type="email" placeholder="Email" name="email" onChange={updateUser}></input>
                                    <br></br>
                                    <input className="loginpage_text" type="password" placeholder="Password" name="password" onChange={updateUser}></input>
                                    <br></br>
                                    <button className="loginpage_button" type="submit">Log in</button>
                                </form>
                            </div>

                            <div className="loginpage_ordiv">
                                <div className="loginpage_divider"></div>
                                <div className="loginpage_or">OR</div>
                                <div className="loginpage_divider"></div>
                            </div>

                            <div>
                                <div className="loginpage_fb">
                                    <img src={fb} width="12px" style={{paddingInlineEnd: "5px"}}></img>Login with Facebook
                                </div>
                                <div className="loginpage_forgot">
                                    Forgot Password?
                                </div>
                            </div>

                            <div className="loginpage_signupoption">
                                <div className="loginpage_signup">
                                    <p className="signup_text">Don't have an account?</p> <Link className="anchor" to="/">Signup</Link>
                                </div>
                            </div>

                            <div className="loginpage_download">
                                <p className="loginpage_downloadtext">Get the app</p>
                                <div className="loginpage_downloadicons">
                                    <img src={app} width="80px"></img>
                                    <img src={play} width="80px"></img>
                                </div>
                            </div>

                            {
                                message && (
                                    alert(message)
                                )
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    )
}

export default Login;