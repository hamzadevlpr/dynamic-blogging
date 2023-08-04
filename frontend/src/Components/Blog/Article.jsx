import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import axios from 'axios'


function Article() {
    const [btnloading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [createdDate, setCreatedDate] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const { id } = useParams();
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    useEffect(() => {
        setLoading(true);
        const url = 'http://localhost:3999/getPost/' + id;
        axios.get(url)
            .then((res) => {
                setTitle(res.data.title)
                setContent(res.data.content)
                setCreatedDate(res.data.createdDate)
                setDesc(res.data.desc)
                setName(res.data.country)
                console.log(res.data.title)

            }).catch((err) => {
                console.error(err);
            }).finally(() => {
                setLoading(false);
            })

    }, []);
    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-800 dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-100">
                                    <img
                                        className="mr-4 w-12 h-12 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                        alt="Jese Leos"
                                    />
                                    <div>
                                        <a
                                            href="#"
                                            rel="author"
                                            className="text-xl font-bold text-gray-100 "
                                        >
                                            Jese Leos
                                        </a>
                                        <p className="text-base font-light text-gray-100">
                                            Graphic Designer, educator &amp; CEO Flowbite
                                        </p>
                                        <p className="text-base font-light text-gray-100 ">
                                            <time
                                                pubdate=""
                                                dateTime="2022-02-08"
                                                title="February 8th, 2022"
                                            >
                                                {formatDate(createdDate)}
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-100 lg:mb-6 lg:text-4xle">
                                {title}
                            </h1>
                        </header>
                        <p class="text-2xl text-gray-300">{desc}</p>
                        <br />
                        <br />
                        <p class="lead text-gray-100 text-lg text-justify">{content}</p>

                    </article>
                </div>
            </main >
            <aside
                aria-label="Related articles"
                className="py-8 lg:py-24"
            >
                <div className="px-4 mx-auto max-w-screen-xl">
                    <h2 className="mb-8 text-2xl font-bold text-gray-100">
                        Related articles
                    </h2>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        <article className="max-w-sm">
                            <a href="#">
                                <img
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                                    className="mb-5 rounded-lg"
                                    alt="Image 1"
                                />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-100">
                                <a href="#">Our first office</a>
                            </h2>
                            <p className="mb-4 font-light text-gray-100">
                                Over the past year, Volosoft has undergone many changes! After
                                months of preparation.
                            </p>
                            <NavLink
                                className="flex items-center text-sm text-sky-500 font-medium"
                            >
                                <span className="relative flex items-center gap-2">
                                    Read more <AiOutlineDoubleRight />
                                </span>
                            </NavLink>
                        </article>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Article