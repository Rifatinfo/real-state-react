import logo from "../assets/logo-white.webp";

const Footer = () => {
    return (
        <div className="bg-[#DDC7BB] md:h-72 lg:h-72 p-4 grid grid-cols-1 gap-6 md:flex md:items-center md:justify-around lg:flex lg:justify-around lg:items-center">
            {/* logo section */}
            <div className="">
                <img src={logo} alt="" />
                <p>Bringing you closer to <br/> your dream home, one <br/>click at a time.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold">About</h1>
                    <p>Our Story</p>
                    <p>Careers</p>
                    <p>Our Team</p>
                    <p>Resources</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold">Support</h1>
                    <p>FAQ</p>
                    <p>Contact Us</p>
                    <p>Help Center</p>
                    <p>Terms of Service</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold">Find Us</h1>
                    <p>Events</p>
                    <p>Locations</p>
                    <p>Newsletter</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold">Our Social</h1>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter (x)</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
