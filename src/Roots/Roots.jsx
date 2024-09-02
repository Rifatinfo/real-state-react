import Nav from "../Components/Nav/Nav";
import Slider from "../Components/Slider/Slider";

const Roots = () => {
    return (
        <div>
            <Nav></Nav>
            <Slider style={{ minHeight: 'calc(100vh - 82px)' }}></Slider>
        </div>
    );
};

export default Roots;