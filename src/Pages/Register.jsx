import { Link } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import registerImg from "../assets/register-img.jpg";
import registerPage from "../assets/register-page.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    console.log(success);
    const notifyRegister = () => toast.success('User Created Successfully');

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const confirmPassword = form.get('confirmPassword');
        const photo = form.get('photo');
        console.log(name, photo);
        // Reset error and success messages
        setRegisterError('');
        setSuccess('');


        //basic validation 
        if (!email || !password || !confirmPassword || !name) {
            toast.error('All fields are required!');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long!');
            return;
        }
        else if (!/A-Z/.test(password)) {
            toast.error('Must have an Uppercase letter in the password');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Must have a Lowercase letter in the password');
            return;
        }
        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                setSuccess('User Created Successfully');
                notifyRegister(); // Show toast on success
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
                toast.error('Error: ' + error.message);
            });
    };

    return (
        <div>
            <Nav />
            <div className="relative">
                <img className="w-full h-96 object-cover lg:h-[513px]" src={registerImg} alt="Login" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                    <h2 className="text-[#ebcfa7] md:text-5xl text-4xl text-start lg:text-6xl font-bold mb-2 sm:mb-4">Register now!</h2>
                    <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">Huge number of properties available here for buy and sell<br /> also you can find here co-living property as you like</p>
                </div>
            </div>

            {/* Registration form section */}
            <div className="p-4 grid gap-7 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:max-w-6xl lg:mx-auto md:max-w-6xl md:mx-auto">
                <div className="space-y-20">
                    <div className="space-y-9">
                        <h1 className="text-4xl font-bold">Create Account.</h1>
                        <p>Huge number of properties available here for buy, sell and Rent.<br /> Also you find here co-living property, lots of opportunities you have<br /> to choose here and enjoy huge discounts you can get.</p>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-10">
                        <input className="font-light w-full sm:w-[400px] md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2 focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)]" name="name" type="text" placeholder="User name" /><br />
                        <input className="font-light w-full sm:w-[400px] md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2 focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)]" name="email" type="email" placeholder="Email" /><br />
                        <input className="font-light w-full sm:w-[400px] md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2 focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)]" name="photo" type="text" placeholder="Photo URL" /><br />
                        <div className="relative">
                            <input
                                className="font-light w-full sm:w-[400px] md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2 focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)]"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password" />
                            <span className="absolute top-5 right-4 text-2xl lg:right-44" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ?  <FaEye /> : <FaEyeSlash />
                                }
                            </span>
                        </div>
                 
                        <input className="font-light w-full sm:w-[400px] md:w-[350px] lg:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-black border-opacity-60 rounded-[8px] p-[15px] focus:border-2 focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)]" name="confirmPassword" type="password" placeholder="Confirm Password" />

                        <div className="flex justify-between items-center lg:justify-between lg:items-center lg:w-[400px] md:justify-between md:items-center">
                            <p><input type="checkbox" /> Remember me</p>
                            <p className="hover:underline">Forget password</p>
                        </div>

                        <div className="md:flex md:gap-5 md:items-center lg:w-[400px] lg:justify-between">
                            <button type="submit" className="btn btn-outline border-2 border-[#ebcfa7] text-black hover:bg-[#ebcfa7] hover:text-white hover:border-2 hover:border-[#ebcfa7] transition-all duration-200">
                                Register
                            </button>
                            <Link to="/login">
                                <div className="lg:flex lg:items-center lg:gap-2 flex gap-2 justify-center mt-4">
                                    <span>Already have an Account?</span>
                                    <p className="hover:text-[#ebcfa7] underline font-medium text-black">Login</p>
                                </div>
                            </Link>
                        </div>
                    </form>
                    {/* Show error message */}
                    {registerError && <p className="text-red-500">{registerError}</p>}
                </div>
                <div className="flex justify-center items-center">
                    <img className="rounded-xl md:h-[622px]" src={registerPage} alt="Register Page" />
                </div>
            </div>
        </div>
    );
};

export default Register;
