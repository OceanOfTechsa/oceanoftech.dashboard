"use client"

import React, {useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoCloseSharp } from "react-icons/io5";
import Loader from "@/components/loader";
import { LuCircleUserRound } from "react-icons/lu";
import { CiAt } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { FaInbox } from "react-icons/fa";
import { GiNothingToSay } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import { RiMapPinUserLine } from "react-icons/ri";
import Image from "next/image";

const UserProfilePage = () => {
    const [editProfileOpen, setEditProfileOpen] = useState<boolean>(false);
    const mes = ["1"]
    return (
        <div className="flex flex-col justify-start items-start w-full">
              <div className="flex items-start justify-between text-sm w-full">
                  <div>
                     <div className="flex items-center justify-start gap-2">
                         <Avatar className="size-12">
                             <AvatarImage src="https://github.com/shadcn.png" />
                             <AvatarFallback className="border rounded-full border-gray-300 dark:border-gray-600 font-semibold">CN</AvatarFallback>
                         </Avatar>
                         <div className="flex items-start justify-start gap-2">
                             <div className="flex flex-col items-start justify-start">
                                 <h1 className="text-base font-bold">Sithuliso Zulu</h1>
                                 <p className="text-xs text-gray-500">Active</p>
                             </div>
                            <div className="flex flex-col items-start justify-end">
                                <Badge variant="outline">Admin</Badge>
                            </div>
                         </div>
                     </div>
                  </div>
                  <div>
                      <button type="button" aria-controls="application-sidebar" aria-label="Toggle navigation" className="cursor-pointer" onClick={() => setEditProfileOpen(true)}>
                          <span className="sr-only">Toggle Navigation</span>
                         <div className="sm:hidden border rounded-md p-2">
                            <LiaUserEditSolid size={20}/>
                         </div>
                          <div className="hidden sm:flex border rounded-md p-2 items-center gap-2">
                              <LiaUserEditSolid size={20}/> Edit profile
                          </div>
                      </button>
                     {editProfileOpen && (<div className="w-full sm:top-[52px] h-screen backdrop-blur-xs transition-all duration-300 fixed top-0 end-0 bottom-0 z-90 bg-black/30" onClick={() => setEditProfileOpen(false)} />)}
                      <aside className={`bg-gray-100 ${!editProfileOpen && "sm:translate-x-20"} sm:border-tl-md border-t dark:bg-[#171717] transition-all duration-500 md:duration-300 ease-in-out fixed top-0 h-screen end-0 bottom-0 sm:top-[52px] z-[90] ${!editProfileOpen && "sm:w-0"} border-s overflow-hidden p-1 group shadow-md ${editProfileOpen ? "translate-x-0 w-full sm:w-[80%] lg:w-1/2" : "translate-x-full w-0"} md:translate-x-0 lg:block`}>
                            <div className="flex items-center justify-between p-4">
                                <div>
                                    <h2 className="text-lg font-semibold">Edit profile details</h2>
                                </div>
                                <IoCloseSharp className="cursor-pointer" size={20} onClick={() => setEditProfileOpen(false)}/>
                            </div>
                            <Separator />
                            <div className="my-5 w-full h-full flex flex-col items-center justify-start pt-20">
                                {
                                    editProfileOpen && <>
                                        <Loader />
                                        <p className="text-xs text-hray-500 font-bold">Coming soon...</p>
                                    </>
                                }
                            </div>
                      </aside>
                  </div>
              </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-12 gap-4 w-full">
                <div className="col-span-12 sm:col-span-6 w-full flex flex-col">
                    <div className="flex flex-col items-end justify-end gap-3 w-full">
                       <div className="flex gap-3 sm:gap-16 w-full">
                           <div className="flex text-sm items-center gap-2">
                               <LuCircleUserRound size={15}/>
                               <h3 className="hidden sm:block">Employee Id</h3>
                           </div>
                           <div className="text-sm text-gray-500">
                               EMP00123
                           </div>
                       </div>

                        <div className="flex gap-3 sm:gap-16 w-full">
                            <div className="flex text-sm items-center gap-2">
                                <CiAt size={15}/>
                                <h3 className="hidden sm:block">Full name</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                                Sithuliso Zulu
                            </div>
                        </div>

                        <div className="flex gap-3 sm:gap-7 w-full">
                            <div className="flex text-sm items-center gap-2">
                                <HiOutlinePhone size={15}/>
                                <h3 className="hidden sm:block">Contact number</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                                0826867925
                            </div>
                        </div>

                        <div className="flex gap-3 sm:gap-12 w-full">
                            <div className="flex text-sm items-center gap-2">
                                <MdOutlineEmail size={15}/>
                                <h3 className="hidden sm:block">Work email</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                               sithulsio@oceanoftechsa.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 w-full">
                    <div className="flex flex-col items-end justify-end gap-3 w-full">
                        <div className="flex gap-3 sm:gap-20 w-full">
                            <div className="flex text-sm items-center gap-2">
                                <RiTeamLine size={15}/>
                                <h3 className="hidden sm:block">Team(s)</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                                Web Development
                            </div>
                        </div>

                        <div className="flex gap-3 sm:gap-20 w-full">
                            <div className="flex text-sm items-center gap-2">
                                <LuBriefcaseBusiness size={15}/>
                                <h3 className="hidden sm:block">Job Title</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                                Software Engineer
                            </div>
                        </div>

                        <div className="flex gap-3 sm:gap-20 w-full">
                            <div className="flex text-sm items-center gap-2">
                                <RiMapPinUserLine size={15}/>
                                <h3 className="hidden sm:block">Location</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                                South Africa, Durban
                            </div>
                        </div>

                        <div className="flex gap-3 sm:gap-20 w-full">
                            <div className="flex text-sm items-center gap-2">
                                <LuClock size={15}/>
                                <h3 className="hidden sm:block">Join date</h3>
                            </div>
                            <div className="text-sm text-gray-500">
                                1 july, 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-12 gap-3 w-full items-start justify-start">
                {/* Left Section */}
                <div className="col-span-12 sm:col-span-8 w-full flex flex-col items-start">
                    <div className="flex flex-col items-start w-full border rounded-md overflow-hidden bg-gray-100 dark:bg-[#121212]">
                        <div className="p-2 w-full">
                           <div className="font-semibold">
                               Teams
                           </div>
                            <div className="text-xs text-gray-500">
                                These are the teams you are part of.
                            </div>
                        </div>
                        <div className="p-2 mt-2 rounded-sm w-full shadow-md border-t bg-white/50 dark:bg-[#171717]">
                            <div className="flex items-center justify-between my-3 ">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="p-2 rounded-md bg-gray-100 dark:bg-[#121212]">
                                        <Avatar className="size-8">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback className="border rounded-full border-gray-300 dark:border-gray-600 font-semibold">CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="text-base font-bold">Dev team</h1>
                                        <p className="text-sm text-gray-500">Active</p>
                                    </div>
                                </div>
                                <div className="flex -space-x-1 overflow-hidden">
                                    <Image width={100} height={100} className="cursor-pointer inline-block size-6 rounded-full ring-1 ring-white dark:ring-black hover:scale-105"
                                           src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                           alt=""/>
                                    <Image width={100} height={100} className="cursor-pointer inline-block size-6 rounded-full ring-1 ring-white dark:ring-black hover:scale-105"
                                           src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                           alt=""/>
                                    <Image width={100} height={100} className="cursor-pointer inline-block size-6 rounded-full ring-1 ring-white dark:ring-black hover:scale-105"
                                           src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                           alt=""/>
                                    <div className="bg-rose-500/80 cursor-pointer size-6 rounded-full ring-1 ring-white dark:ring-black hover:scale-105 text-sm text-white flex items-center justify-center">
                                        +
                                    </div>
                                </div>
                            </div>
                            <Separator className="my-4" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full border rounded-md overflow-hidden bg-gray-100 dark:bg-[#121212] mt-5">
                        <div className="p-2 w-full">
                            <div className="font-semibold">
                                Social accounts
                            </div>
                            <div className="text-xs text-gray-500">
                                List of active social accounts
                            </div>
                        </div>
                        <div className="p-3 mt-2 rounded-sm w-full shadow-md border-t bg-white/50 dark:bg-[#171717]">
                            <div className="flex items-center justify-between my-3 ">
                                <div className="flex items-center justify-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-facebook text-blue-500 size-5" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                    <div className="flex flex-col">
                                        <h1 className="text-base text-gray-500">Facebook</h1>
                                    </div>
                                </div>
                                <LuExternalLink />
                            </div>
                            <Separator className="my-4" />
                            <div className="flex items-center justify-between my-3 ">
                                <div className="flex items-center justify-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-linkedin size-5 text-sky-800" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>
                                    <div className="flex flex-col">
                                        <h1 className="text-base text-gray-500">Linkedin</h1>
                                    </div>
                                </div>
                                <LuExternalLink/>
                            </div>
                            <Separator className="my-4"/>
                            <div className="flex items-center justify-between my-3 ">
                                <div className="flex items-center justify-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-twitter-x size-5 text-sky-400" viewBox="0 0 16 16">
                                        <path
                                            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                    </svg>
                                    <div className="flex flex-col">
                                        <h1 className="text-base text-gray-500">X (Twitter)</h1>
                                    </div>
                                </div>
                                <LuExternalLink/>
                            </div>
                            <Separator className="my-4"/>
                            <div className="flex items-center justify-between my-3 ">
                                <div className="flex items-center justify-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-facebook text-blue-500 size-5" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                    <div className="flex flex-col">
                                        <h1 className="text-base text-gray-500">GitHub</h1>
                                    </div>
                                </div>
                                <LuExternalLink />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-span-12 sm:col-span-4 w-full flex flex-col items-start">
                    <div className="border rounded-md p-2 w-full">
                        <div className="flex justify-between items-center">
                            <h3 className="text-base font-semibold">Inbox</h3>
                            <FaInbox size={17} />
                        </div>

                        {mes.length === 0
                            ? <div className="w-full flex flex-col items-center justify-start py-10">
                                <GiNothingToSay size={20} />
                                <p className="text-xs font-bold">Nothing found.</p>
                            </div>
                            :
                            <div className="w-full flex flex-col items-start justify-start ">
                                {
                                    mes.map(me =>
                                        <div key={me} className="flex items-center justify-between my-3 w-full">
                                            <div className="flex items-center justify-start gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                     className="bi bi-facebook text-blue-500 size-5" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                                </svg>
                                                <div className="flex flex-col">
                                                    <h1 className="text-base text-gray-500">Facebook</h1>
                                                </div>
                                            </div>
                                            <LuExternalLink />
                                        </div>
                                    )
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfilePage
