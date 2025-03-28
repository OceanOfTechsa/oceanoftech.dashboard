import React from 'react'
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <div className="w-full lg:ps-[50px]">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 mt-10 relative">
                    <div className="h-auto w-full flex flex-col justify-center items-center">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Layout
