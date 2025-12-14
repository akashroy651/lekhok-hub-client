import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    
    const { register, formState: { errors}, handleSubmit } = useForm();

    const {signInUser, user} = useAuth();
    //
    const location = useLocation();
    const navigate = useNavigate();
   console.log('login location', location)
    // Navigate(location?.state || '/')

      const from = location.state || "/";

  // ✅ render শেষ হলে redirect
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);


    

    const handleLogin = (data) => {
    
        signInUser(data.email, data.password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl text-center">Welcome Back</h2>
            <p className="text-center">Please Login</p>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
                {/* email field */}
            <label className="label">Email</label>
            <input type="email" {...register('email', {required:true})} className="input" placeholder="Email" />
              {
                errors.email?.type==='required' && <p className="text-red-500 font-semibold"
                >Email is required</p>
              }


                {/* password field */}
            <label className="label">Password</label>
            <input type="password" {...register('password', {
                required:true,
                 minLength:6,
                 
                })} className="input" placeholder="Password" />
              {
                errors.password?.type==='required' && <p className="text-red-500 font-semibold"
                >Password is required</p>
              }
              {
                errors.password?.type==='minLength' && <p className="text-red-500 font-semibold"
                >Password must be 6 characters or longer</p>
              }
             

              
           
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>New to lekhok hub
         <Link 
         state={location.state}
         className="text-blue-300 underline" to="/register">Register</Link></p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
