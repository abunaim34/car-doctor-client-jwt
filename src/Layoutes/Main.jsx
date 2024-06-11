import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navber from "../Pages/Shared/Navber";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <div className="bottom-0">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;