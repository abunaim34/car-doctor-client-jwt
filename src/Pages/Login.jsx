import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthCotext } from "../Provider/AuthProvider";
import axios from "axios"

const Login = () => {
    const {signIn} = useContext(AuthCotext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser);
            const user = {email}

            // get access token
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res =>{
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location?.state : '/')
                }
            })
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl border p-5">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                    <p>New to Car Doctors <Link to="/signUp" className="text-orange-600 font-bold">SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;