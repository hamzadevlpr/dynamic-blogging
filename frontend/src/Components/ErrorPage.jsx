import React from 'react'
import Lottie from "lottie-react";
import errorPage from "./404.json";
import { Link } from 'react-router-dom';

function ErrorPage({ body }) {
    return (
        <>
            <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full">
                <div className="text-center">
                    <div className="inline-flex rounded-full bg-rose-100 p-4">
                        <div className="rounded-full stroke-rose-600 bg-rose-200 p-4">
                            <svg
                                className="w-16 h-16"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <h1 className="mt-5 text-[36px] font-bold text-white lg:text-[50px]">
                        404 - Page not found
                    </h1>
                    <p className="text-slate-100 font-medium mt-5 lg:text-lg">
                        {body}
                    </p>
                    <div className="mt-8">
                        <Link to={'/'} className="focus:ring-2 text-sm font-mdedium text-gray-800 font-medium border-0 shadow-lg bg-slate-400 rounded-lg hover:bg-slate-500 py-3 px-20">
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ErrorPage