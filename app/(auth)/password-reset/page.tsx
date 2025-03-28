import React from 'react'
import Image from "next/image";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import {Metadata} from "next";
import {AppSettings} from "@/AppSettings";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import {ThemeToggle} from "@/components/ThemeToggle";

export const metadata: Metadata = {
    title: `Reset Password - ${AppSettings.SITE_NAME}`,
    description: AppSettings.SITE_DESCRIPTION,
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const PasswordReset = () => {
    return (
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center dark:bg-[#121212] relative">
            <div aria-hidden="true" className="flex absolute -top-48 end-0 z-[1]">
                <div className="bg-purple-300 opacity-10 blur-3xl w-[390px] h-[730px] md:w-[660px] xl:w-[1036px] md:h-[600px] dark:bg-purple-900 dark:opacity-10"></div>
                <div className="bg-slate-300 opacity-50 blur-3xl md:w-[577px] md:h-[300px] transform translate-y-32 dark:bg-slate-900/60"></div>
            </div>
            <div className="max-w-md w-full p-6">
                <Image width={50} height={50} src="/logo-light.png" alt="Logo" className="w-12 h-12 dark:hidden hover:animate-pulse transition-all duration-500 ease-in-out mt-2 -ms-2" loading="eager"/>
                <Image width={50} height={50} src="/logo-dark.webp" alt="Logo" className="hidden w-12 h-12 dark:block hover:animate-pulse transition-all duration-500 ease-in-out mt-2 -ms-2"  loading="eager"/>
                <h1 className="text-2xl font-extrabold text-black text-start dark:text-white mt-2">Reset password</h1>
                <p className="text-sm text-gray-500 hidden">Enter password to unlock your account.</p>

                {/** Cancel password change**/}
                <Link href="/login" className="flex items-center mt-10 mb-3 group">
                    <BsArrowLeft className="group-hover:-translate-x-2" />
                    <div className="flex items-center mx-2">
                       Go to login
                    </div>
                </Link>

                {/** ResetPassword form **/}
                <ResetPasswordForm />
            </div>
            <div className="absolute top-1 end-1 0 z-10 sm:hidden">
                <ThemeToggle />
            </div>
        </div>
    )
}
export default PasswordReset
