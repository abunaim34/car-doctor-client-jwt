import { useContext } from "react";
import { AuthCotext } from "../Provider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthCotext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={location.pathname} replace></Navigate>
};

export default PrivateRoutes;