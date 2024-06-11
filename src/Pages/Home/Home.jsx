import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurServices from "./OurServices";

const Home = () => {
    return (
        <div className="mt-10">
            <div>
                <Banner></Banner>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <OurServices></OurServices>
            </div>
        </div>
    );
};

export default Home;