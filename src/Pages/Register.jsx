import { Link } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import regiterImg from "../assets/register-img.jpg";
import registerPage from "../assets/register-page.jpg";


const Register = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="relative">
                <img className="w-full h-96 object-cover lg:h-[513px]" src={regiterImg} alt="Login" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                    <h2 className="text-[#ebcfa7] md:text-5xl text-4xl text-start lg:text-6xl font-bold mb-2 sm:mb-4">Register now!</h2>
                    <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">Huge number of propreties availabe here for buy and sell<br /> also you can find here co-living property as you like</p>
                </div>
            </div>

            {/* login details section  */}
            <div className="p-4 grid gap-7 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:max-w-6xl lg:mx-auto md:max-w-6xl md:mx-auto">
                <div className="space-y-20 border">
                    <div className="space-y-9">
                        <h1 className="text-4xl font-bold">Create Account.</h1>
                        <p>Huge number of propreties availabe here for buy, sell and Rent.<br /> Also you find here co-living property, lots opportunity you have<br /> to choose here and enjoy huge discount you can get.</p>
                    </div>
                    <div className="space-y-10 border">
                        <input className="font-light w-full sm:w-[400px] md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2  focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] " type="text" placeholder="email"></input><br />
                        <input className="font-light w-full sm:w-[400px]  md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2  focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] " type="password" placeholder="password"></input>

                        <div className=" flex justify-between items-center border lg:justify-between lg:items-center 
                                    lg:w-[400px] md:justify-between md:items-center">
                            <p><input type="checkbox" /> Remember me</p>
                            <p className="hover:under-line ">Forget password</p>
                        </div>

                        <div className="md:flex md:gap-5 md:items-center lg:w-[400px] lg:justify-between">
                            <button className="btn btn-outline border-2 border-[#ebcfa7] text-black hover:bg-[#ebcfa7] hover:text-white hover:border-2 hover:border-[#ebcfa7] transition-all duration-200">
                                Register
                            </button>
                            <Link to="/login">
                                <div className="lg:flex lg:items-center lg:gap-2 flex gap-2 justify-center mt-4">
                                    <span>Already have an Account?</span>
                                    <p className="hover:text-[#ebcfa7] underline font-medium text-black"> Login</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                <div>
                    <img className=" rounded-xl md:h-[622px] " src={registerPage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;