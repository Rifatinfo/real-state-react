import Nav from "../Components/Nav/Nav";
import about_page from "../../src/assets/about_page.webp"
import CountUp from 'react-countup';

const About = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="mt-32 bg-black bg-opacity-5 p-5">
                <div>
                    <h1 className="lg:text-6xl text-center mb-4">About Bary.</h1>
                    <p className="text-center text-xs">Huge number of propreties availabe here for buy<br /> and sell, also you can find here co-living property</p>
                </div>
                <div className="mt-11 mx-w-6xl mx-auto">
                    <img className="mx-auto w-52 lg:w-[597px] lg:h-auto" src={about_page} alt=""  width="597" height="716"/>
                </div>
                <div className="mt-4">
                    <p className="text-center text-[#DDC7BB]">Since 1975</p>
                    <h1 className="text-center lg:text-3xl font-semibold text-xs">We Provide Right Choice of Properties that You <br />need and have great opportunity to choose<br /> from thousands of Collection</h1>
                </div>
                {/* counting */}
                <div className="flex justify-center space-x-8 text-center mt-8 mb-8">
                    <div className="stat-item">
                        <h3 className="lg:text-4xl md:text-4xl font-bold">
                            <CountUp start={0} end={200} duration={5} />k+
                        </h3>
                        <p className="md:text-lg lg:text-lg text-gray-600 text-sm">Properties</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="lg:text-4xl md:text-4xl font-bold">
                            <CountUp start={0} end={120} duration={5} />k+
                        </h3>
                        <p className="md:text-lg lg:text-lg text-gray-600 text-sm">Customers</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="lg:text-4xl md:text-4xl font-bold">
                            <CountUp start={0} end={160} duration={5} />+
                        </h3>
                        <p className="md:text-lg lg:text-lg text-gray-600 text-sm">Awards Won</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
