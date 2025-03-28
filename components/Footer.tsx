import React from 'react'
import {AppSettings} from "@/AppSettings";

const Footer = () => {
    const date = new Date();
    const Year = date.getFullYear();
    return (
        <div className="w-full pt-10 px-4">
            <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto mt-7 border-t">
                <div className="flex justify-center items-center">
                    <p className="text-sm text-gray-400">© {Year} {AppSettings.COMPANY_NAME}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
export default Footer;
