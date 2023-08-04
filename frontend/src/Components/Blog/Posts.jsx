import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { BsCircle } from 'react-icons/bs';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function Posts() {
    const [post, setPost] = useState([]);
    const [btnloading, setLoading] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const url = 'http://localhost:3999/';
            try {
                const response = await axios.get(url);
                console.log(response.data)
                setPost(response.data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, []);
    return (
        <>
            {
                btnloading ?
                    <div className="flex ">
                        <ClipLoader size={90} color='#fff' />
                    </div> :
                    <div className="space-y-18">
                        {
                            post.map((element, index) => {
                                return (    
                                    <div key={index}>
                                        <NavLink to={`/article/${element._id}`} className="cursor-pointer relative group"  >
                                            <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
                                            <BsCircle className="hidden absolute right-full mr-6 top-2 text-gray-400  md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block bg-gray-400 rounded" />

                                            <div className="hover:bg-gray-900 p-5 rounded-xl">
                                                <div className="relative ">
                                                    <h3 className="text-base font-semibold tracking-tight text-slate-100  pt-8 lg:pt-0">
                                                        {element.title}
                                                    </h3>
                                                    <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2 text-slate-200">
                                                        <p>
                                                            {element.content}
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className="flex justify-between">
                                                    <NavLink
                                                        className="flex items-center text-sm text-sky-500 font-medium"
                                                    >
                                                        <span className="relative flex items-center gap-2">
                                                            Read more <AiOutlineDoubleRight />
                                                        </span>
                                                    </NavLink>
                                                    <NavLink
                                                        className="flex items-center text-sm text-gray-400 font-bold"
                                                    >
                                                        <span className="relative flex items-center gap-2">
                                                            by - {element._id}
                                                        </span>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                                <dt className="sr-only">Date</dt>
                                                <dd className="whitespace-nowrap text-md leading-6 text-slate-200 font-medium">
                                                    <time dateTime="2023-07-19T17:00:00.000Z">{formatDate(element.createdDate)}</time>
                                                </dd>
                                            </dl>
                                        </NavLink>
                                    </div>
                                )

                            })
                        }

                    </div >

            }
        </>
    )
}

export default Posts