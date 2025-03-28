import React from 'react';
import Image from "next/image";
import AuthForm from "@/components/forms/AuthForm";
import {FaArrowRightToBracket} from "react-icons/fa6";
import { Metadata } from 'next';
import {AppSettings} from "@/AppSettings";
import {ThemeToggle} from "@/components/ThemeToggle";

export const metadata: Metadata = {
    title: `Login - ${AppSettings.SITE_NAME}`,
    description: AppSettings.SITE_DESCRIPTION,
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const Login = () => {
    return (
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center dark:bg-[#121212] relative">
            <div aria-hidden="true" className="flex absolute -top-48 end-0 z-[1]">
                <div
                    className="bg-purple-300 opacity-10 blur-3xl w-[390px] h-[730px] md:w-[660px] xl:w-[1036px] md:h-[600px] dark:bg-purple-900 dark:opacity-10"></div>
                <div
                    className="bg-slate-300 opacity-50 blur-3xl md:w-[577px] md:h-[300px] transform translate-y-32 dark:bg-slate-900/60"></div>
            </div>
            <div className="max-w-md w-full p-6">
                <Image width={50} height={50} src="/logo-light.png" alt="Logo" className="w-12 h-12 dark:hidden hover:animate-pulse transition-all duration-500 ease-in-out mt-2 -ms-2" loading="eager"/>
                <Image width={50} height={50} src="/logo-dark.webp" alt="Logo" className="hidden w-12 h-12 dark:block hover:animate-pulse transition-all duration-500 ease-in-out mt-2 -ms-2" loading="eager"/>
                <h1 className="text-2xl font-extrabold mb-6 text-black text-start dark:text-white mt-2">Sign in to your account</h1>

                {/** login form **/}
                 <AuthForm BtnIcon={<FaArrowRightToBracket />} />
            </div>
            <div className="absolute top-1 end-1 0 z-10 sm:hidden">
                <ThemeToggle />
            </div>
        </div>
    )
}
export default Login
