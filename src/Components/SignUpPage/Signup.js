import React from "react";
import inst_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Signup=()=>{

    const navigate= useNavigate();

    const[user, setUser]= useState({email:"", fullname:"", name:"", password:""})
    const[message, setMessage]= useState("");
    const{setToken}= useContext(UserContext);

    function updateUser(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    async function implementSignup(e){
        e.preventDefault()
        try{
            const response= await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
            name: user.name,
            email: user.email,
            password: user.password
        })
        console.log(response.data.message)
        setMessage(response.data.message)
        setToken(response.data.data.token)

        const jsonToken= JSON.stringify(response.data.data.token)
        localStorage.setItem("token", jsonToken)
        
        navigate("/home")
        }
        catch(error){
            console.log(error.response.data.message);
            setMessage(error.response.data.message);
        }
    }


    return(
        <div className="signup_body">
            <div className="signup_abovecontainer">

                <div className="signup_image">
                    <img className="signup_logo" src={inst_logo}></img>
                </div>

                <div className="signup_paragraph">
                    <p className="signup_para">Sign up to see photos and videos<br/>from your friends.</p>
                </div>

                <div>
                    <img src={fb} width="12px" style={{paddingInlineEnd: "5px"}}></img>Log in with Facebook
                </div>

                <div className="signup_ordiv">
                    <div className="loginpage_divider"></div>
                    <div className="loginpage_or">OR</div>
                    <div className="loginpage_divider"></div>
                </div>

                <div>
                    <form onSubmit={implementSignup}>
                        <input className="loginpage_text" type="email" placeholder="Email" name="email" onChange={updateUser}></input>
                        <br></br>
                        <input className="loginpage_text" type="text" placeholder="Fullname" name="fullname" onChange={updateUser}></input>
                        <br></br>
                        <input className="loginpage_text" type="text" placeholder="Username" name="name" onChange={updateUser}></input>
                        <br></br>
                        <input className="loginpage_text" type="password" placeholder="Password" name="password" onChange={updateUser}></input>
                        <br></br>
                        <button className="loginpage_button" type="submit">Sign up</button>
                    </form>
                </div>

                {
                    message && (
                        alert(message)
                    )
                }
            </div>

            <div className="signupbelow_container">
                Have an account? <Link className="anchor" to="/login">Log in</Link>
            </div>
        </div>
    )
}

export default Signup;