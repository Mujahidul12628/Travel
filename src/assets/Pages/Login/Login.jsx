import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import google from '../../images/google.jpg'
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.log('Error:', error);
            });
    };

    const handleGoogleSignIn = event => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col min-w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login</h1>
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered pr-10"

                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                                </span>

                            </div> */}
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered bg-black w-full"
                                />
                                <span className="absolute inset-y-0 pr-3 right-0 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-cyan-500 py-2 md:py-2 rounded-lg text-white">Login</button>
                        </div>
                        <div className='mx-auto mt-3'><span>Haven not any account yet? </span><Link to="/register" className='text-blue-500'> Register</Link></div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="bg-white border-2 border-cyan-500 py-2 md:py-2 rounded-lg text-black">
                                <img className=' rounded-lg w-1/5 mx-auto' src={google} alt="Photo 4" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
