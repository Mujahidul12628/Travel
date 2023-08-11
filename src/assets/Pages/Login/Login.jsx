import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';


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
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col min-w-full hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login</h1>
                </div>
                <form onSubmit={handleLogin} className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
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
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="pr-10 input input-bordered"

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
                                    className="w-full bg-black input input-bordered"
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-6 form-control">
                            <button className="py-2 text-white rounded-lg bg-cyan-500 md:py-2">Login</button>
                        </div>
                        <div className='mx-auto mt-3'><span>Haven not any account yet? </span><Link to="/register" className='text-blue-500'> Register</Link></div>
                        <div className="mt-6 form-control">
                            <button onClick={handleGoogleSignIn} className="py-2 text-black bg-white border-2 rounded-lg border-cyan-500 md:py-2">
                                <img className='w-1/5 mx-auto rounded-lg ' src={google} alt="Photo 4" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
