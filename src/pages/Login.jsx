/* eslint-disable no-unused-vars */
import Navbar from "../sheard/Navbar";
import { ImGoogle3 } from 'react-icons/im'
import { FaEyeSlash, FaEye } from "react-icons/fa6"
import {  useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const { googleSignIn } = useContext(AuthContext);
    const [alert, setAlert] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setAlert('');
        setError('');

        if(password.length < 6){
            Swal.fire({
              icon: 'error',
              text: 'Password should be at least 6 characters or longer'
            })
            return;
          }
           if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&?*]).{6,}$/.test(password))){
          Swal.fire({
              icon: 'error',
              text: 'Password should be a capital letter and a special character'
            })
            return;
          }
         signIn(email, password)
         .then(result =>{
            console.log(result.user);
            e.target.reset();

            setAlert(Swal.fire(
                'Good job!',
                'Login successfully ',
                'success'
              ))
              navigate(location?.state ? location.state : '/');
         })
         .catch(error =>{
            console.error(error);
            setError(Swal.fire({
                icon: 'error',
                text: error.message,
               
              }))
         })

    }
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className=" relative ">
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full " required />
                                    <span className=" absolute right-4 top-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <button onClick={handleGoogle}  className="btn font-medium btn-primary mt-4"><ImGoogle3 className="mr-2 w-4 h-4"></ImGoogle3>Google Sign In</button>
                            </div>
                        </form>
                        <p className=" text-center mt-4 mb-8">Do not have an account<Link className=" text-blue-600 font-bold" to="/registration"> Registration</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;