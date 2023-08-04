import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

function Navbar() {
    const { login, user } = useContext(UserContext);
    const location = useLocation();

    // Check if the current path is '/login' or '/signup'
    const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup';
    return (
        <>
            {
                !isLoginOrSignup && (
                    // Your Navbar component code here
                    <>
                        <header className="text-gray-600 body-font bg-gray-700">
                            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                    <NavLink to={'/'} className='text-2xl font-bold text-gray-100'>BLOGGING</NavLink>
                                </a>
                                {
                                    login ?
                                        <>
                                            <div className="flex gap-2">
                                                <NavLink to={'/create'} className="inline-flex items-center bg-green-500 py-1 px-8 focus:outline-none rounded text-base mt-4 md:mt-0 text-white font-medium">
                                                    Create Post
                                                </NavLink>
                                                <NavLink to={'/login'} className="inline-flex items-center text-white font-medium">
                                                    {`Logout (${user})`}
                                                </NavLink>
                                            </div>
                                        </> :
                                        <NavLink to={'/login'} className="inline-flex items-center bg-gray-800 py-1 px-8 focus:outline-none rounded text-base mt-4 md:mt-0 text-white font-medium">
                                            Login
                                        </NavLink>
                                }
                            </div>
                        </header>
                    </>
                )
            }

        </>
    )
}

export default Navbar