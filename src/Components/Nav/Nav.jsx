import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { BiCross } from "react-icons/bi";

const Navbar = () => {
    const Links = [
        { name: "Home", link: "/" },
        { name: "Product", link: "/product" },
        { name: "Explore", link: "/explore" },
        { name: "Contact", link: "/contact" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
            <div className="flex items-center justify-between py-4 px-7 md:px-10">
                {/* Logo */}
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <span className="text-5xl">
                        <IoLogoJavascript />
                    </span>
                    <span className="ml-3"> Nav</span>
                </div>

                {/* Desktop Links */}
                <ul className="hidden xl:flex items-center gap-8 font-semibold text-lg">
                    {Links.map((link, index) => (
                        <li key={index} className="hover:bg-sky-400 hover:text-white rounded-md p-2 transition-all cursor-pointer">
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Search Bar - Hidden on small screens */}
                <div className="flex justify-around gap-4">
                    {/* Dropdown Menu for Avatar */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <input
                        type="text"
                        placeholder="Search here"
                        className="input input-bordered input-info w-full max-w-xs rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 hidden md:flex items-center gap-3"
                    />
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="lg:hidden block text-4xl cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <BiCross /> : <RiMenuUnfold2Fill />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-400px] opacity-0"
                    }`}
            >
                {Links.map((link, index) => (
                    <li key={index} className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                        <a href={link.link}>{link.name}</a>
                    </li>
                ))}
            </div>


        </div>
    );
};

export default Navbar;
