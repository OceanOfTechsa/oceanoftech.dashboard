import React from 'react'
import {Metadata} from "next";
import {AppSettings} from "@/AppSettings";
import {headers} from "next/headers";
import Image from "next/image";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: `Offline - You are offline`,
    description: AppSettings.SITE_DESCRIPTION,
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const Offline = async () => {
    const headersList = await headers()
    const searchParam = headersList.get("x-net-searchParam") as string;
    const isAuthPage: boolean = ["?%2Flogin=", "?%2Flocked=", "?%2Fpassword-reset="].some(route => searchParam?.startsWith(route));

    return (
        <>
            {isAuthPage ?
                <div className="flex min-h-screen h-auto relative">
                    <div className="hidden lg:flex items-center justify-center flex-1 relative">
                        <div className="absolute top-0 h-full">
                            <Image src="/auth-cover.avif" alt="auth" className="object-cover h-full" width="3500" height="1800" loading="eager" priority={true} />
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 lg:w-1/2 relative flex flex-col gap-3 items-center justify-center">
                        <Image width="3500" height={100} loading="eager" src="/logo-light.png" alt=""  className="w-20 h-20 dark:hidden hover:animate-pulse transition-all duration-500 ease-in-out mt-2"/>
                        <Image width="3500" height={100} loading="eager" src="/logo-dark.webp" alt=""  className="hidden w-20 h-20 dark:block hover:animate-pulse transition-all duration-500 ease-in-out mt-2"/>

                        <div className="dark:text-white">
                            <h2 className="font-bold text-xl flex gap-2 justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                     className="bi bi-wifi-off" viewBox="0 0 16 16">
                                    <path
                                        d="M10.706 3.294A12.6 12.6 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4q.946 0 1.852.148zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.45 8.45 0 0 1 3.51-1.27zm2.596 1.404.785-.785q.947.362 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.5 8.5 0 0 0-1.98-.932zM8 10l.933-.933a6.5 6.5 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.53.53 0 0 1-.611.09A5.5 5.5 0 0 0 8 10m4.905-4.905.747-.747q.886.451 1.685 1.03a.485.485 0 0 1 .047.737.52.52 0 0 1-.668.05 11.5 11.5 0 0 0-1.811-1.07M9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A2 2 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75z"/>
                                </svg>
                                You are offline
                            </h2>

                            <p className="text-sm text-gray-500 mb-5 mt-2">
                                You need to be connected to the internet to use the portal
                            </p>
                        </div>
                    </div>
                </div>
                :
                <>
                    <Header/>
                    <Sidebar/>
                    <div className="w-full lg:ps-[50px]">
                        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 mt-10 relative">
                            <div className="h-auto w-full flex flex-col justify-center items-center">
                                <div className="w-full  lg:w-1/2 relative flex flex-col gap-3 items-center justify-center">
                                    <Image width="3500" height={100} loading="eager" src="/logo-light.png" alt=""  className="w-20 h-20 dark:hidden hover:animate-pulse transition-all duration-500 ease-in-out mt-2"/>
                                    <Image width="3500" height={100} loading="eager" src="/logo-dark.webp" alt=""  className="hidden w-20 h-20 dark:block hover:animate-pulse transition-all duration-500 ease-in-out mt-2"/>

                                    <div className="dark:text-white">
                                        <h2 className="font-bold text-xl flex gap-2 justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                                 className="bi bi-wifi-off" viewBox="0 0 16 16">
                                                <path
                                                    d="M10.706 3.294A12.6 12.6 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4q.946 0 1.852.148zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.45 8.45 0 0 1 3.51-1.27zm2.596 1.404.785-.785q.947.362 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.5 8.5 0 0 0-1.98-.932zM8 10l.933-.933a6.5 6.5 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.53.53 0 0 1-.611.09A5.5 5.5 0 0 0 8 10m4.905-4.905.747-.747q.886.451 1.685 1.03a.485.485 0 0 1 .047.737.52.52 0 0 1-.668.05 11.5 11.5 0 0 0-1.811-1.07M9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A2 2 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75z"/>
                                            </svg>
                                            You are offline
                                        </h2>

                                        <p className="text-sm text-gray-500 mb-5 mt-2">
                                            You need to be connected to the internet to use the portal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </>
            }
        </>
    )
}
export default Offline
