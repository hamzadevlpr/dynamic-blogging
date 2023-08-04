import React from 'react'
import Posts from './Posts'
import Navbar from './Navbar'

function IndexPage() {
  return (
    <>
      <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
        <header className="py-16 sm:text-center">
          <h1 className="mb-4 text-5xl sm:text-4xl tracking-tight text-slate-200 font-extrabold">
            Latest Updates
          </h1>
          <p className="text-lg text-slate-100 ">
            All the latest news, straight from the team.
          </p>
        </header>
        <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-100 dark:bg-slate-800 sm:block" />
          <Posts />

        </div>
      </main>

    </>
  )
}

export default IndexPage