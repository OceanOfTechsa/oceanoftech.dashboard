import React from 'react'
import { headers } from "next/headers";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import {Metadata} from "next";
import {AppSettings} from "@/AppSettings";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: `404 - Page not found`,
    description: AppSettings.SITE_DESCRIPTION,
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const NotFound = async () => {
    const headersList = await headers()
    const pathname = headersList.get("x-next-pathname");
    const isAuthPage: boolean = ["/login", "/locked", "/password-reset"].some(route => pathname?.startsWith(route));

    return (
        <>
            {isAuthPage ?
                <div className="flex min-h-screen h-auto relative">
                    <div className="hidden lg:flex items-center justify-center flex-1 relative">
                        <div className="absolute top-0 h-full">
                            <Image src="/auth-cover.avif" alt="auth" className="object-cover h-full" width="3500" height="1800" loading="eager" priority={true} />
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center relative">
                        <div className="w-full p-5 md:p-20 flex flex-col gap-3 items-center justify-center">
                            <h1 className="text-9xl font-extrabold  dark:text-white tracking-widest">404</h1>
                            <div className="bg-[#FF6A3D] text-white px-2 text-sm rounded rotate-12 absolute">
                                Page Not Found
                            </div>
                            <div className="">
                                <Link href="/login" className="relative inline-block text-sm font-medium dark:text-white group">
                                    <span className="text-lg inline-flex items-center gap-2 p-3 px-6 rounded-md group transition-all duration-700 ease-in-out">
                                      Go Home <FaArrowRightLong className="group-hover:translate-x-2 mt-1" />
                                    </span>
                                </Link>
                            </div>
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
                                <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                                    <div className="w-full p-5 md:p-20 flex flex-col gap-3 items-center justify-center">
                                        <h1 className="text-9xl font-extrabold  dark:text-white tracking-widest">404</h1>
                                        <div className="bg-[#FF6A3D] text-white px-2 text-sm rounded rotate-12 absolute">
                                            Page Not Found
                                        </div>
                                        <div className="">
                                            <Link href="/" className="relative inline-block text-sm font-medium dark:text-white group">
                                                <span className="text-lg inline-flex items-center gap-2 p-3 px-6 rounded-md group transition-all duration-700 ease-in-out">
                                                  Go Home <FaArrowRightLong className="group-hover:translate-x-2 mt-1 transition-all duration-500 ease-in-out" />
                                                </span>
                                            </Link>
                                        </div>
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
export default NotFound
