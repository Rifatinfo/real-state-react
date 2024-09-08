import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import EstateCart from "../Components/EstateCart/EstateCart";

const Home = () => {
    const estateNews = useLoaderData();
    console.log(typeof estateNews);
    return (
        <div>
            <Slider></Slider>
            <div>
                {
                    estateNews.map(estateNew => <EstateCart
                    key={estateNew.id}
                    estateNews={estateNew}
                    ></EstateCart>)
                }
            </div>
        </div>
    );
};

export default Home;