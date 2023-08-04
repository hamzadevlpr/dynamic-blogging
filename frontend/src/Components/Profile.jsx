
import { UserContext } from './Context/UserContext';
import { useContext, useState } from 'react';
import ErrorPage from './ErrorPage'
import { useParams } from 'react-router-dom';

export default function Profile() {
    const params = useParams();
    console.log(params)
    const [isEditMode, setIsEditMode] = useState(false);
    const { user, login } = useContext(UserContext);
    const [fullName, setFullName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditMode(!isEditMode);
    };
    return (
        <>
            {!login ? (
                <>
                    <ErrorPage body="You are not Logged In "/>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <div className='bg-gradient-to-r from-rose-100 to-teal-100 shadow-2xl rounded-xl lg:w-1/2  md:w-1/2 w-full p-10 m-10 relative'>
                        <form>
                            <div className="space-y-0 max-w-4xl mx-5 sm:m-auto">

                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                                    {/* component */}
                                    <div className="flex items-center justify-center space-x-6 p-5 ring-1 ring-inset ring-gray-300 mt-5">
                                        <div className=" ring-1 ring-inset ring-gray-900 rounded-full">
                                            <img
                                                className="h-16 w-16 object-fill rounded-full"
                                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                                                alt="Current profile photo"
                                            />
                                        </div>
                                        <label className="block">
                                            <span className="sr-only">Choose profile photo</span>
                                            <input
                                                type="file"
                                                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Full name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    disabled={!isEditMode}
                                                    value={fullName}
                                                    onChange={handleFullNameChange}
                                                    type="text"
                                                    name="first-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    disabled={!isEditMode}
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    type="text"
                                                    name="email"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-center flex-col gap-8 w-auto m-auto mb-10">
                                <button class="flex justify-center items-center gap-10 w-full rounded-md bg-gradient-to-r from-rose-100 to-teal-100 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-gradient-to-r hover:from-teal-100 hover:to-rose-100"
                                    onClick={handleEditClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    <p> {isEditMode ? 'Save' : 'Edit'}</p>
                                </button>
                                <button
                                    className="flex justify-center items-center gap-10 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    <p>Update</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
