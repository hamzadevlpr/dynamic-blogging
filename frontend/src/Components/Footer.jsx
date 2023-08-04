import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="bg-gray-700 relative bottom-0 w-full p-5">
                <div className="text-white font-medium text-sm text-center sm:text-left flex flex-row items-center justify-center">
                    © {year} MALIK —
                    <a
                        href="https://github.com/hamzadvlpr1"
                        rel="noopener noreferrer"
                        className="text-white ml-1"
                        target="_blank"
                    >
                        <span className='flex gap-2 items-center'><AiFillGithub /> <p>hamzadvlpr1</p></span>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Footer