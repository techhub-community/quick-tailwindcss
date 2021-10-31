import React from 'react'

function Layout(props:any) {
    return (
        <>
            <div className="h-screen  ">
                <nav className="hidden mb-6 h-16 border-b-2  w-full lg:flex flex-row justify-between gap-x-5 px-12 items-center">
                    <div className="">Logo</div>
                    <div className="">Search</div>
                    <div className="">Buttons</div>
                </nav>
                <nav className="block lg:hidden h-12 w-full bg-red-500 text-gray-100">
                    Mobile nav
                </nav>
                {props.children}
            </div>
        </>
    )
}

export default Layout
