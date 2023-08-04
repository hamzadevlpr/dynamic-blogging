import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UserContext } from '../Context/UserContext';
import ErrorPage from '../ErrorPage';
import Login from '../Login';
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePost() {
    const { login } = useContext(UserContext);
    const [value, setValue] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        content: '',
    })
    const [btnloading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.content) {
            toast.error("Fields cannot be empty");
        } else {
            setLoading(true);
            const url = 'http://localhost:3999/create';
            try {
                const response = await axios.post(url, {
                    title: formData.title,
                    desc: formData.desc,
                    content: formData.content
                });
                console.log(formData)

                navigate('/blogs')
                toast.success('Post Created Successfully');
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error('An error occurred creating post');
                }
            } finally {
                setLoading(false);
            }
        }
    };
    return (
        <>
            {
                login ?
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 bg-gray-800 border-b border-gray-200">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="text-xl text-white">
                                                Title <span className="text-red-500">*</span>
                                            </label>
                                            <br />
                                            <input
                                                name="title"
                                                type='text'
                                                onChange={handleChange}
                                                className="bg-[#fff] border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="text-xl text-white">Description</label>
                                            <br />
                                            <input
                                                type="text"
                                                className="bg-[#fff] border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                                name="desc"
                                                id="description"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-8 h-40">
                                            <label className="text-xl text-white">
                                                Content <span className="text-red-500">*</span>
                                            </label>
                                            <br />
                                            <textarea
                                                type="text"
                                                name='content' // Change the name to 'content'
                                                className="min-h-40 bg-[#fff] border ring-1 ring-inset ring-gray-300 rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                                value={formData.content} // Use 'value' instead of 'defaultValue'
                                                onChange={handleChange}
                                            ></textarea>

                                        </div>

                                        <button
                                            className="bg-green-500 py-1 px-8 focus:outline-none rounded text-base mt-4 md:mt-0 text-white font-medium"
                                        >
                                            {btnloading ? <ClipLoader size={20} color='#fff' /> : 'Submit'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <Login title='Welcome back,' />
            }

        </>
    )
}

export default CreatePost