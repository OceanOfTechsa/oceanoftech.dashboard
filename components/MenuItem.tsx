"use client";

import { ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
    icon: ReactNode;
    title: string;
    sideBarOpen: boolean;
    children?: ReactNode;
    route: string;
}

const activeStyles =
    "text-gray-900 bg-gray-200 dark:bg-[#313131] dark:text-white dark:hover:text-[#B4B4B4] rounded-md";

const SidebarItem = ({ icon, title, sideBarOpen, children, route }: SidebarItemProps) => {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);

    const isActive = pathname.includes(route) || pathname.startsWith(route);

    return (
        <div
            className={`mt-1 ${isActive ? activeStyles : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md 
          dark:hover:bg-[#313131] hover:bg-gray-200 dark:text-[#B4B4B4] dark:hover:text-white cursor-pointer 
          ${isActive ? activeStyles : ""}`}
            >
                <div>{icon}</div>
                <div
                    className={`transition-all duration-500 ease-in-out whitespace-nowrap w-full flex justify-between items-center 
          ${sideBarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                >
                    <span>{title}</span>
                    {isHovered ? (
                        <ChevronUp size={20} className="text-gray-500" />
                    ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                    )}
                </div>
            </button>

            {/* Submenu (Show when hovered) */}
            <div
                className={`transition-all duration-500 ease-in-out ml-4 space-y-2 pl-3 pt-3 border-l 
        ${isHovered ? "flex " : "hidden"} flex-col`}
            >
                {children}
            </div>
        </div>
    );
};

export default SidebarItem;
