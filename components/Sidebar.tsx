'use client'

import React, {useState} from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {CgMenuGridR} from "react-icons/cg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TbSquareToggle } from "react-icons/tb";
import SidebarItem from "@/components/MenuItem";
import { FaUserTie } from "react-icons/fa6";
import Image from "next/image";

const Sidebar =  () => {
    const pathname = usePathname();
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const activeStyles = "hover:text-gray-900 bg-gray-200 dark:bg-[#313131] dark:text-white dark:hover:text-[#B4B4B4]"

    return (
        <>
            <div className="sticky top-0 inset-x-0 z-10 border-b px-4 sm:px-4 md:px-6 lg:hidden overscroll-y-auto" >
                <div className="flex items-center py-4">
                    <button type="button" aria-controls="application-sidebar" aria-label="Toggle navigation" className="cursor-pointer" onClick={() => setSideBarOpen(true)}>
                        <span className="sr-only">Toggle Navigation</span>
                        <CgMenuGridR size={19}/>
                    </button>

                    <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                        <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                            Portal
                            <svg
                                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </li>
                        <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
                            aria-current="page">
                            {pathname.slice(1)}
                        </li>
                    </ol>
                </div>
            </div>
            {/* Backdrop - Only visible on mobile when sidebar is open */}
            {sideBarOpen && (<div className="w-full h-screen md:hidden backdrop-blur-xs sm:top-[52px] transition-all duration-300 fixed top-0 start-0 bottom-0 z-20 bg-black/30" onClick={() => setSideBarOpen(false)} />)}

            {/* Sidebar - Always visible on large screens */}
            <aside className={`mt-[3px] bg-gray-100 ${!sideBarOpen && "sm:-translate-x-20"} dark:bg-[#171717] transition-all duration-500 md:duration-300 ease-in-out fixed top-0 sm:top-[52px] start-0 bottom-0 z-[60] w-56 ${!sideBarOpen && "sm:w-[50px]"} hover:w-56 border-e overflow-hidden p-1 group
                ${sideBarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 lg:block`}
            >
                <nav className="overflow-x-hidden w-full flex flex-col h-full justify-between dark:text-white mt-4 pb-10">
                    <ul className="space-y-1.5">
                        <li>
                            <Link href="/" className={`transition-all duration-500 ease-in-out w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md dark:hover:bg-[#313131] dark:text-[#B4B4B4] dark:hover:text-white dark:focus:outline-none ${
                                    pathname === "/" && activeStyles
                                }`}
                            >
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
                                        fill="currentColor"
                                        className="bi bi-speedometer2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className={`${
                                        sideBarOpen ? "opacity-100" : "opacity-0"
                                    } opacity-0 translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap`}
                                >
                                    Portal Dashboard
                                </div>
                            </Link>
                        </li>
                        <li>
                            <SidebarItem
                                route="/team"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                                    </svg>
                                }
                                title="Team"
                                sideBarOpen={true}
                            >
                                <Link href={`/team/add-user`} className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Add new user</Link>
                                <Link href={`/team/all-users`} className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>All users</Link>
                                <Link href={`/team/add-team`} className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Add new team</Link>
                                <Link href={`/team/all-teams`} className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>All teams</Link>
                            </SidebarItem>
                        </li>

                        <li>
                            <SidebarItem
                                route="/jobs"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-suitcase-lg" viewBox="0 0 16 16">
                                        <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z"/>
                                    </svg>
                                }
                                title="Jobs"
                                sideBarOpen={true}
                            >
                                <Link href={`/add-user`} className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Post a Job</Link>
                                <Link href={`/add-user`} className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>All jobs</Link>
                                <Link href={`/add-user`}  className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Applications</Link>
                            </SidebarItem>
                        </li>

                        <li>
                            <SidebarItem
                                route="/approvals"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                    </svg>
                                }
                                title="Approvals"
                                sideBarOpen={true}
                            >
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>My
                                    Approvals</Link>
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Project
                                    Approvals</Link>
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Event
                                    Approvals</Link>
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Profile
                                    Change</Link>
                            </SidebarItem>
                        </li>

                        <li>
                            <SidebarItem
                                route="/inbox"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                         className="bi bi-inboxes" viewBox="0 0 16 16">
                                        <path
                                            d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0z"/>
                                    </svg>
                                }
                                title="Inbox"
                                sideBarOpen={true}
                            >
                                <Link href={`/add-user`} className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131] flex justify-between items-center`}>
                                    <>
                                        Internal
                                    </>
                                    <div className="flex -space-x-1 overflow-hidden">
                                        <Image width={100} height={100} className="inline-block size-5 rounded-full ring-1 ring-white dark:ring-black hover:scale-105"
                                             src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt=""/>
                                        <Image width={100} height={100} className="inline-block size-5 rounded-full ring-1 ring-white dark:ring-black hover:scale-105"
                                             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt=""/>
                                        <Image width={100} height={100} className="inline-block size-5 rounded-full ring-1 ring-white dark:ring-black hover:scale-105"
                                             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                             alt=""/>

                                        <div className="bg-rose-500/80  size-5 rounded-full ring-1 ring-white dark:ring-black hover:scale-105 text-sm text-white flex items-center justify-center">
                                            +
                                        </div>
                                    </div>
                                </Link>
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Clients
                                    Inbox</Link>
                            </SidebarItem>
                        </li>

                        <li>
                            <SidebarItem
                                route="/events"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                         className="bi bi-calendar-date" viewBox="0 0 16 16">
                                        <path
                                            d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                    </svg>
                                }
                                title="Events"
                                sideBarOpen={true}
                            >
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Create Event</Link>
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>All Events</Link>
                            </SidebarItem>
                        </li>
                        <li>
                            <SidebarItem
                                route="/projects"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                         className="bi bi-braces" viewBox="0 0 16 16">
                                        <path
                                            d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
                                    </svg>
                                }
                                title="Projects"
                                sideBarOpen={true}
                            >
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Add Project</Link>
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>All Projects</Link>
                            </SidebarItem>
                        </li>

                        <li>
                            <SidebarItem
                                route="/clients"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                                         className="bi bi-hdd-stack" viewBox="0 0 16 16">
                                        <path
                                            d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z"/>
                                        <path
                                            d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                                        <path
                                            d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                    </svg>
                                }
                                title="Clients"
                                sideBarOpen={true}
                            >
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Add
                                    Client</Link>
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Invoices</Link>
                                <Link href={`/add-user`}
                                      className={`rounded-md p-2 text-sm hover:bg-gray-200 dark:hover:bg-[#313131]`}>Client Dashboard</Link>
                            </SidebarItem>
                        </li>
                    </ul>
                    <div className="flex flex-col items-center">
                        {pathname.includes("/profile") &&
                            <div className="hover:text-gray-900 bg-gray-200 dark:bg-[#313131] dark:text-white transition-all duration-500 ease-in-out w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md dark:hover:bg-[#313131] dark:text-[#B4B4B4] dark:hover:text-white dark:focus:outline-none">
                                <div>
                                    <FaUserTie size={19} />
                                </div>
                                <div
                                    className={`${
                                        sideBarOpen ? "opacity-100" : "opacity-0"
                                    } opacity-0 translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap`}
                                >
                                    <div className="text-sm font-semibold">
                                        sithuliso@oceanoftechsa.com
                                    </div>
                                </div>
                            </div>
                        }
                        <Link href="/settings"
                              className={`transition-all duration-500 ease-in-out w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md dark:hover:bg-[#313131] hover:bg-gray-200 dark:text-[#B4B4B4] dark:hover:text-white dark:focus:outline-none ${
                                  pathname === "/settings" && activeStyles
                        }`}
                        >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                                     className="bi bi-gear" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                                    <path
                                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                                </svg>
                            </div>
                            <div
                                className={`${
                                    sideBarOpen ? "opacity-100" : "opacity-0"
                                } opacity-0 translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap`}
                            >
                                Settings
                            </div>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hidden cursor-pointer relative transition-all duration-500 ease-in-out w-full md:flex items-center gap-x-3.5 py-2 px-2.5 text-sm dark:text-[#B4B4B4] dark:hover:text-white dark:focus:outline-none">
                                <div>
                                    <TbSquareToggle size={17}/>
                                </div>
                                <div className={`${sideBarOpen ? "opacity-100" : "opacity-0"} opacity-0 translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap`} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="ms-16 w-full z-50 text-sm">
                                <DropdownMenuLabel>
                                    <div className="flex flex-col gap-0.5 justify-center text-gray-500 ">
                                       sidebar control
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer">Notifications</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">Lock</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-red-600 bg-red-500 bg-opacity-30 hover:bg-red-600 hover:text-white transition-all duration-500 ease-in-out mt-1 dark:text-white">Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>
            </aside>
        </>
    )
}
export default Sidebar
