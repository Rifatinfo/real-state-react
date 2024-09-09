import { useLoaderData, useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import details_pages from "../../assets/details_page_image.png"
import post1 from "../../assets/post1.webp"
const EstateDetails = () => {
    const estateNews = useLoaderData();
    console.log(typeof estateNews);  // object 
    const { id } = useParams();
    const estateDetail = estateNews.find(estateDetail => estateDetail.id === parseInt(id));
    console.log(estateDetail);
    console.log(estateNews, id);
    return (
        <div>
            {/* { id}
            {estateDetail.description}
            <img src={estateDetail.image} alt="" /> */}
            <Nav></Nav>
            <div className="relative">
                <img className="w-full h-96 object-cover lg:h-[513px]" src={details_pages} alt="Login" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                    <h2 className="text-[#ebcfa7] md:text-5xl text-4xl text-start lg:text-6xl font-bold mb-2 sm:mb-4">Properties Details</h2>
                    <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">Huge number of propreties availabe here for buy and sell<br /> also you can find here co-living property as you like</p>
                </div>
            </div>

            {/* description page  */}
            <div className="w-full space-y-4 md:flex md:gap-4 lg:flex lg:gap-5 border md:max-w-6xl md:mx-auto lg:max-w-6xl lg:mx-auto mt-5">
                <div className="w-full md:flex-2 lg:flex-2 border  md:w-3/6 lg:w-3/5">
                    <img className="rounded-xl" src={post1} alt="" />
                    <div className="mt-10 space-y-5">
                        <p className="text-4xl font-bold hover:underline">{estateDetail.estate_title}</p>
                        <p>{estateDetail.long_description}</p>
                    </div>
                </div>
                <div className="w-full md:flex-1 lg:flex-1 border  md:w-3/6 lg:w-2/5">
                    <p className="text-2xl font-bold underline mb-3">Property Search .</p>
                    <form>
                        <input
                            className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-gray-500 hover:border-[#ebcfa7] border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[8px] focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white"
                            type="text"
                            placeholder="Location"
                        />
                        <br />

                        <select
                            className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-gray-500 hover:border-[#ebcfa7] border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[12px] focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white mt-3"
                            name="state"
                        >
                            <option className="text-gray-500" value="">Property Category</option>
                            <option className="text-gray-500" value="ca">Property island</option>
                            <option className="text-gray-500" value="ny">Property  New York</option>
                            <option className="text-gray-500" value="va">Property  Virginia</option>
                        </select><br />
                        <select
                            className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-gray-500 hover:border-[#ebcfa7] border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[12px] focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white mt-3"
                            name="state"
                        >
                            <option className="text-gray-500" value="">Property Type</option>
                            <option className="text-gray-500" value="ca">Property A</option>
                            <option className="text-gray-500" value="ny">Property  B</option>
                            <option className="text-gray-500" value="va">Property C</option>
                        </select><br />
                        <select
                            className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-gray-500 hover:border-[#ebcfa7] border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[12px] focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white mt-3"
                            name="state"
                        >
                            <option className="text-gray-500" value="">Price Range</option>
                            <option className="text-gray-500" value="ca">15000 usd</option>
                            <option className="text-gray-500" value="ny">16000 usd</option>
                            <option className="text-gray-500" value="va">17000 usd</option>
                        </select><br />
                        <select
                            className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border-2 border-gray-500 hover:border-[#ebcfa7] border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[12px] focus:border-[#ebcfa7] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white mt-3"
                            name="state"
                        >
                            <option className="text-gray-500" value="">Property Size</option>
                            <option className="text-gray-500" value="ca">45679 sq ft</option>
                            <option className="text-gray-500" value="ny">45789 sq ft</option>
                            <option className="text-gray-500" value="va">65454 sq ft</option>
                        </select><br />
                        <button className="mt-3 text-xl btn btn-outline border-2 border-[#ebcfa7] text-black hover:bg-[#ebcfa7] hover:text-white hover:border-2 hover:border-[#ebcfa7] transition-all duration-200">
                            search
                        </button>
                    </form>
                </div>

              {/* text field close */}

            </div>

        </div>
    );
};

export default EstateDetails;
