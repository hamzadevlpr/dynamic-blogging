import React from 'react';
import Lottie from "lottie-react";
import success from "./Success.json";
import error from "./error.json";
import { useLocation } from 'react-router-dom';
function Success({ closeModal }) {

    const location = useLocation();

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="transition-opacity ease-out duration-300 fixed inset-0 z-20 flex items-center justify-center">
                    <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        {/* ... Your modal content ... */}
                        <div>
                            <div className="flex items-center justify-center">
                                {/* ... Your SVG icon ... */}
                                <Lottie animationData={error} loop={true} />;

                            </div>
                            <div className="mt-2 text-center">
                                <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title" onClick={closeModal}>
                                    {location.pathname === '/login' ? 'Logged In Successfully' : (location.pathname === '/signup' ? 'Registered Successfully' : '')
                                    }
                                </h3>
                            </div>
                        </div>
                        <div className="mt-5 sm:flex sm:items-center sm:justify-between ">

                            <button
                                className="focus:ring-2 text-sm font-mdedium text-white border-0 shadow-lg bg-indigo-700 rounded-lg hover:bg-indigo-600 py-3 w-full"
                                onClick={closeModal}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
