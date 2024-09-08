import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineAreaChart } from "react-icons/ai";
import { Link } from "react-router-dom";

const EstateCart = ({ estateNews }) => {
    const { image, estate_title, id, segment_name, description, price, status, area, location, facilities, } = estateNews;
    return (
        <div className=" p-4 md:max-w-6xl md:mx-auto lg:max-w-6xl lg:mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 lg:space-y-3 md:space-y-3 border p-4 rounded-lg">
                {/* Image Column */}
                <div className="flex justify-center items-center ">
                    <img src={image} alt={estate_title} className="w-full h-auto rounded-lg" />
                </div>
                {/* Estate Details */}
                <div className="col-span-2 space-y-4">
                    <h2 className="text-xl font-bold hover:underline">{estate_title}</h2>
                    <div className="flex gap-3 justify-start items-center">
                        <p><IoLocationOutline /></p>
                        <p><span className="font-medium">Location :</span> {location}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                        <p><span className="font-medium">segment name :</span> {segment_name}</p>
                    </div>
                    <div className="lg:flex lg:gap-4">
                        <ul className="lg:flex lg:gap-3 font-semibold">
                            {facilities.map((facility, idx) => (
                                <li key={idx}>{facility}</li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div className="flex justify-start item-center gap-9 font-bold text-xl">
                        <div className="flex items-center gap-4">
                            <div>
                                {price}
                            </div>
                            <div className="flex gap-3 items-center">
                                <p><AiOutlineAreaChart /></p>
                                <p>{area}</p>
                            </div>
                            <div className="hidden md:block">
                                <Link to={`/estate/${id}`}>
                                    <button className=" rounded-xl p-2 btn-outline border-2 border-[#ebcfa7] text-[#ebcfa7] hover:bg-[#ebcfa7] hover:text-white hover:border-2 hover:border-[#ebcfa7] transition-all duration-200">
                                        <div className=" ">
                                            <p className="flex item-center"> View Property</p>
                                        </div>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    {/* for small device button  */}
                    <Link to={`/estate/${id}`}>
                        <button className="lg:hidden  md:hidden p-2 btn-outline border-2 border-[#ebcfa7] text-[#ebcfa7] hover:bg-[#ebcfa7] hover:text-white hover:border-2 hover:border-[#ebcfa7] transition-all duration-200">
                        View Property
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCart;
