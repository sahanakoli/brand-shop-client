import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { FaEyeSlash, FaEye } from "react-icons/fa6"
import Swal from 'sweetalert2'
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Navbar from "./Navbar";



const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);


    const handleRegistration = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

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
  
          createUser(email, password)
          .then(result =>{
              console.log(result.user)
              e.target.reset();
             
             updateProfile(result.user, {
              displayName: name,
              photoURL:"https://i.ibb.co/D9wWRM6/olivia.jpg"
             })
             .then( () => console.log())
              
  
              Swal.fire(
                'Good job!',
                'Registration successfully ',
                'success'
              )
          })
          .catch(error =>{
              console.error(error)
              Swal.fire({
                    icon: 'error',
                    text: 'Already used'
                  })
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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nmae</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <button onClick={handleGoogle}  className="btn font-medium btn-primary mt-4"><FcGoogle className="mr-2 w-4 h-4"></FcGoogle>Google Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;