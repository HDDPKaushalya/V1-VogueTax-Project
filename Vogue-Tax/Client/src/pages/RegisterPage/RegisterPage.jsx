import {useState} from "react";
import "./RegisterPage.css";
import {PasswordComplex} from "../../data/PasswordComplex";
import RLogoImage from "../../assets/images/logo.jpg";
import FbImage from "../../assets/icons/facebook.png";
import InstaImage from "../../assets/icons/instagram.png";
import XImage from "../../assets/icons/x.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import * as toast from "react-dom/test-utils";


export default function RegisterPage() {
    const navigate = useNavigate();
    const [regInfo, setRegInfo] = useState({
        fullName: "",
        Pnumber: "",
        email: "",
        password: "",
        CPassword: "",
    });

    const regUser = async (e) => {
        e.preventDefault();

        const { fullName, email,Pnumber, password } = regInfo;
        try{
            const {data} = await axios.post("/register", {
                fullName, email, Pnumber, password
            });
            if(data.error){
                toast.error(data.error);
            }else{
                setRegInfo({});
                toast.success("Registration Successful!");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }




    }


  return (
    <div className="register-page-div">
        <div className="col-1">
            <div className="register-form-div">
                <h2>Register</h2>
                <form id="form" onSubmit={regUser}>
                    <label form="username" className="label">Full Name</label>
                    <input
                           name = "fullName"
                           type="text"
                           autoComplete='off'
                           placeholder='Full Name'
                           value={regInfo.fullName}
                           onChange={(e) => {setRegInfo({...regInfo, fullName: e.target.value})}}
                    />

                    <label form="Pnumber" className="label">Phone Number</label>
                    <input
                           name="Pnumber"
                           type="text"
                           autoComplete='off'
                           placeholder='Phone Number'
                           value={regInfo.Pnumber}
                           onChange={(e) => {setRegInfo({...regInfo, Pnumber: e.target.value})}}
                    />


                    <label form="Email" className="label">Email</label>
                    <input
                        name ="email"
                        type="email"
                        autoComplete='off'
                        placeholder= 'email'
                        value = {regInfo.email}
                        onChange={(e) => {setRegInfo({...regInfo, email: e.target.value})}}
                    />


                    <label form="Password" className="label">Password</label>
                    <input
                        name ="password"
                        type="password"
                        placeholder= 'password'
                        autoComplete='off'
                        value = {regInfo.password}
                        onChange={(e) => {setRegInfo({...regInfo, password: e.target.value})}}
                    />

                    <PasswordComplex valueOfNewPassword={regInfo.password}/>

                    <label form="CPassword" className="label">Confirm Password</label>
                    <input
                        type="password"
                        placeholder= 'Confirm Password'  />

                    <div className="check-div">
                        <p>
                            <span><input type="checkbox"></input></span>
                            I agree to the Terms & Conditions.
                        </p>
                    </div>

                    <button className="btn" onClick={regUser}>Register</button>
                    <p className="login_direct">
                        Already have an Account? <Link to="/">Login</Link>
                    </p>

                    <div className="socials-div">
                        <span>Follow us on</span>
                        <div className="social-icons">
                        <a href="https://www.facebook.com/VoguetexWeligama/"><img className="social-icon" src={FbImage} alt="fb-logo" /></a>
                        <a href="https://www.instagram.com/vogue_tex/"><img className="social-icon" src={InstaImage} alt="insta-logo" /></a>
                        <a href="#"><img className="social-icon" src={XImage} alt="x-logo" /></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-2">
            {/*<img src={RBackgImage} alt="register-backg-image" />*/}
        </div>
        <img src={RLogoImage} className="md-logo" alt="register-logo-image" />
    </div>
  );
}
