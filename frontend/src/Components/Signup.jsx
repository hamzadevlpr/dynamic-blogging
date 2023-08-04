import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Success from "./Success";
import { BsEyeSlash, BsEye, BsFingerprint } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

function Signup(props) {

    const { setUser, setLogin } = useContext(UserContext);
    const [passwordType, setPasswordType] = useState("password");
    // success model
    const [showModal, setShowModal] = useState(false);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    // Sign in Button Loading
    const [btnloading, setLoading] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name === "" || formData.email === "" || formData.password === "") {
            toast.error("Fields cannot be empty");
        } else {
            setLoading(true);
            const url = 'http://localhost:3999/signup';
            try {
                const response = await axios.post(url, {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                });

                toast.success('Signup successful');
                navigate('/login')
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error('An error occurred during signup');
                }
            } finally {
                setLoading(false);
            }
        }
    };




    // Password Toggle Button
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    return (
        <div className="h-[92.5vh] w-full py-16 px-4 bg-slate-800">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-gradient-to-r from-rose-100 to-teal-100 shadow-2xl rounded-xl lg:w-1/3  md:w-1/2 w-full p-10 relative">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="uppercase text-4xl font-extrabold leading-8 text-gray-800 text-center">{props.title}</p>

                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-2">
                            <div>
                                <lable className="text-sm font-medium leading-none text-gray-800">Full Name</lable>
                                <div className="relative flex items-center justify-center">
                                    <input
                                        name="name"
                                        type='text'
                                        onChange={handleChange}
                                        className="bg-[#fff] border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                    />
                                    <span className="absolute right-4 top-5  cursor-pointer text-slate-400">
                                        {<AiOutlineUser size={20} />}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                                <div className="relative flex items-center justify-center">
                                    <input
                                        name="email"
                                        type='email'
                                        onChange={handleChange}
                                        className={`bg-[#fff] border ring-1 ring-inset ring-gray-300
                                        rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2`
                                        }

                                    />
                                    <span className="absolute right-4 top-5  cursor-pointer text-slate-400">
                                        {<BsFingerprint size={20} />}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full">
                                <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                                <div className="relative flex items-center justify-center">
                                    <input
                                        name="password"
                                        type={passwordType}
                                        onChange={handleChange}
                                        className="bg-[#fff] border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                    />
                                    <span className="absolute right-4 top-5  cursor-pointer  text-slate-400" onClick={togglePassword}>
                                        {passwordType === "password" ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button type="submit" aria-label="create my account" className="focus:ring-2 text-sm font-mdedium text-white border-0 shadow-lg bg-indigo-700 rounded-lg hover:bg-indigo-600 py-3 w-full">
                                {btnloading ? <ClipLoader size={20} color='#fff' /> : 'Create Account'}
                            </button >
                            <p className="text-center text-sm pt-5">Already have an Account? <Link className="font-medium hover:underline" to={'/login'}>Login now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
