import Nav from "../Components/Nav/Nav";
import loginImg from "../assets/login-img.jpg";

const Login = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="relative">
                <img className="w-full h-96 object-cover lg:h-[513px]" src={loginImg} alt="Login" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                    <h2 className="text-[#ebcfa7] md:text-5xl text-4xl text-start lg:text-6xl font-bold mb-2 sm:mb-4">Login Now!</h2>
                    <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">Provide a decent level of comfort</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
