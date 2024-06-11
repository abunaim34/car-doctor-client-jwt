import {createBrowserRouter} from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Chack from "../Pages/Chack";
import Bookings from "../Pages/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUP",
                element: <SignUp></SignUp>
            },
            {
                path: "/bookings",
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoutes><Chack></Chack></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/servicess/${params.id}`)
            },
        ]
    },
]);

export default router