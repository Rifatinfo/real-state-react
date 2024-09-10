import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import loginImg from "../assets/login-img.jpg";
import loginPageImag from '../assets/login-page.jpg'
import { IoLogoGoogle } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const notifyLogin = () => toast.success('User Logging Successfully'); 
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login pager',location);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(e.currentTarget);
        console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        signIn(email, password)
        .then(result => {
            console.log(result);
            e.target.reset();
            notifyLogin();
            // navigate after login 
            navigate(location?.state ? location.state : '/');
           
        })
        .catch(error => {
            console.log(error)
            toast.error('Something went wrong');
        })
    }
    return (
        <div>
            <Nav></Nav>
            <div className="relative">
                <img className="w-full h-96 object-cover lg:h-[513px]" src={loginImg} alt="Login" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                    <h2 className="text-[#ebcfa7] md:text-5xl text-4xl text-start lg:text-6xl font-bold mb-2 sm:mb-4">Login Now!</h2>
                    <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">Huge number of propreties availabe here for buy and sell<br /> also you can find here co-living property as you like</p>
                </div>
            </div>

            {/* login details section  */}
            <div className="p-4 grid gap-7 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:max-w-6xl lg:mx-auto md:max-w-6xl md:mx-auto">
                <div className="space-y-20">
                    <div className="space-y-9">
                        <h1 className="text-4xl font-bold">Login to Bary</h1>
                        <p>Huge number of propreties availabe here for buy, sell and Rent.<br /> Also you find here co-living property, lots opportunity you have<br /> to choose here and enjoy huge discount you can get.</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-10 ">
                        <input className="font-light w-full sm:w-[400px] md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2  focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] " type="email" name="email" placeholder="email"></input><br />
                        <input className="font-light w-full sm:w-[400px]  md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2  focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] " type="password" name="password" placeholder="password"></input>

                        <div className=" flex justify-between items-center  lg:justify-between lg:items-center 
                                    lg:w-[400px] md:justify-between md:items-center">
                            <p><input type="checkbox" /> Remember me</p>
                            <p className="hover:under-line link link-hover">Forget password</p>
                        </div>
                       {/* direct image login system */}
                       <div className="flex gap-6 items-center justify-center lg:justify-start text-2xl">
                       <IoLogoGoogle />
                       <IoLogoTwitter />
                       <FaGithub />
                       <FaFacebook />
                       </div>
                        <div className="flex gap-5 items-center">
                            <button type="submit" className="btn btn-outline border-2 border-[#ebcfa7] text-black hover:bg-[#ebcfa7] hover:text-white hover:border-2 hover:border-[#ebcfa7] transition-all duration-200">
                                Login
                            </button>
                            <Link to="/register">
                              <p className="hover:text-[#ebcfa7] underline font-medium text-black">Register</p>
                            </Link>
                        </div>
                    </form>

                </div>
                <div>
                    <img className=" rounded-xl md:h-[622px] " src={loginPageImag} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
