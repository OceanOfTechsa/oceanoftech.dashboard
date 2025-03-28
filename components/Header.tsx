import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {ThemeToggle} from "@/components/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { TbMessageCircle } from "react-icons/tb";

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import {IoCloseSharp} from "react-icons/io5";

const Header = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
    return (
       <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full backdrop-blur-md border-b text-sm ps-2 lg:ps-3 pe-3 py-2 bg-gray-100 dark:bg-[#171717]">
           <nav className="flex basis-full items-center jutify-between w-full mx-auto">
               <Link href="/" className="flex-none text-xl font-semibold dark:text-white -ms-2">
                   <Image src="/logo-light.png" alt="logo" width={256} height={256} className="w-8 h-8 dark:hidden hover:animate-pulse transition-all duration-500 ease-in-out"/>
                   <Image src="/logo-dark.webp" alt="logo" width={256} height={256} className="w-8 h-8 hidden dark:block hover:animate-pulse transition-all duration-500 ease-in-out"/>
               </Link>

               <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
                   <div className="hidden sm:block w-full"/>
                   <div className="flex flex-row items-center justify-end gap-2">
                       <button type="button" id="searchBtn"
                               className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                           <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                               <circle cx="11" cy="11" r="8"/>
                               <path d="m21 21-4.3-4.3"/>
                           </svg>
                       </button>

                       <HoverCard>
                           <HoverCardTrigger className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center text-sm rounded-full dark:hover:bg-[#121212] hover:shadow-md cursor-pointer">
                               <TbMessageCircle size={20} />
                           </HoverCardTrigger>
                           <HoverCardContent className="p-2 flex flex-col items-center justify-center w-4/6">
                               <div className="flex items-center justify-between w-full">
                                   <div>
                                       <h2 className="text-lg font-bold">Notifications</h2>
                                   </div>
                                   <div className="p-2 rounded-md border cursor-pointer">
                                       <IoCloseSharp  size={20}/>
                                   </div>
                               </div>
                               <div>
                                   Welcome to Ocean of
                               </div>
                           </HoverCardContent>
                       </HoverCard>

                       <button type="button"
                               className="w-[2.375rem] h-[2.375rem] justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hidden"
                               data-hs-offcanvas="#hs-offcanvas-right"
                       >
                           <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                               <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                           </svg>
                       </button>
                       <ThemeToggle />
                       <div className="hs-dropdown relative inline-flex [--placement:bottom-right]  z-10 pl-2 border-l ">
                           <DropdownMenu>
                               <DropdownMenuTrigger className="cursor-pointer relative rounded-full">
                                   <Avatar className="">
                                       <AvatarImage src="https://github.com/shadcn.png" />
                                       <AvatarFallback className="border rounded-full border-gray-300 dark:border-gray-600 font-semibold">CN</AvatarFallback>
                                   </Avatar>
                                   <span  className="bg-rose-500 w-2 h-2 rounded-full absolute top-0 right-0 animate-pulse z-10 border-white border" />
                               </DropdownMenuTrigger>
                               <DropdownMenuContent className="me-14 w-full">
                                   <DropdownMenuLabel>
                                       <div className="flex flex-col gap-0.5 justify-center">
                                           <p>My Account</p>
                                           <p className="text-sm text-gray-500">{data?.user?.email}</p>
                                       </div>
                                   </DropdownMenuLabel>
                                   <DropdownMenuSeparator />
                                   <DropdownMenuItem className="cursor-pointer">
                                       <Link href={`/profile/${data?.user?.id}`} className="w-full">Profile</Link>
                                   </DropdownMenuItem>
                                   <DropdownMenuItem className="cursor-pointer">Notifications</DropdownMenuItem>
                                   <DropdownMenuItem className="cursor-pointer">Lock</DropdownMenuItem>
                                   <DropdownMenuItem className="cursor-pointer text-red-600 bg-red-500 bg-opacity-30 hover:bg-red-600 hover:text-white transition-all duration-500 ease-in-out mt-1 dark:text-white">Log out</DropdownMenuItem>
                               </DropdownMenuContent>
                           </DropdownMenu>
                       </div>
                   </div>
               </div>
           </nav>
       </header>
    )
}
export default Header
