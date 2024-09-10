import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Footer/Footer";

const Roots = () => {
    return (
        <div>
            <Nav></Nav>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Roots;