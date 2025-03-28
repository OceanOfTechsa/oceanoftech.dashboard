import React from 'react';
import { BsArrowLeft } from "react-icons/bs";

interface BackButtonProps{
    title: string
}
const BackButton = ({title}: BackButtonProps) => {
    return (
        <div className="mt-7 mb-3 flex justify-start items-start">
            <button className="flex flex-col items-start justify-center" type="button" id="backBtn">
                <div className="flex items-center justify-start group cursor-pointer transition-all">
                    <BsArrowLeft className="group-hover:-translate-x-1 transition-all duration-500 ease-in-out" />
                    <p className="text-sm text-gray-500 ms-2">Go back</p>
                </div>
                <h1 className="text-xl font-extrabold dark:text-white text-center">{title}</h1>
            </button>
        </div>
    )
}
export default BackButton
