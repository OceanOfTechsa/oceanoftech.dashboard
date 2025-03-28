"use client"

import React,  { useState } from 'react'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ImSpinner6} from "react-icons/im";
import { IoIosWarning } from "react-icons/io";
import Link from "next/link";
import {login} from "@/app/(auth)/login/actions";
import Loader from "@/components/loader";

interface AuthProps {
    hideEmailField?: boolean;
    BtnIcon: React.ReactNode;
    action?: "login" | "unlock"
    variant?: "login" | "unlock" | "signup";
}
const AuthForm: React.FC<AuthProps> = ({hideEmailField = false, BtnIcon, action = "login", variant = "login"}) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        await login(formData);
    }
    return (
        <div className="grid gap-4 lg:gap-6">
            <form action={async (formData) => handleSubmit(formData)}>
                <div className="gap-y-4 lg:gap-6 space-y-6">
                    {
                      !hideEmailField &&
                        <div className="flex flex-col gap-y-3">
                            <Label htmlFor="email">Work Email Address</Label>
                            <div>
                                <Input name="email" placeholder="yourname@oceanoftechsa.com" type="email" required autoComplete="email" disabled={loading}/>
                                <p className="text-xs text-rose-500 hidden items-center gap-2 mt-1"><IoIosWarning /> Email address is required</p>
                            </div>
                        </div>
                    }
                    <div className="flex flex-col gap-y-3">
                        <div className="flex justify-between items-center gap-2">
                         <div>
                             <Label htmlFor="password">Password</Label>
                         </div>
                            {
                                variant === "login" || variant === "unlock"  &&
                                <>{!loading && <Link href="/password-reset" ><span className="text-sky-600 text-sm hover:text-sky-800 underline">Reset Password</span></Link>}</>
                            }
                        </div>
                        <div>
                            <Input name="password" placeholder="Valid password" type="password" required autoComplete="current-password" disabled={loading}/>
                            <p className="text-xs text-rose-500 hidden items-center gap-2 mt-1"><IoIosWarning /> Password is required</p>
                        </div>
                    </div>
                    {
                        variant === "signup" ? (
                            <Button  size="default" className="w-full cursor-pointer transition-all duration-500 ease-in-out" disabled={loading}>
                                {!loading ? <>Signup {BtnIcon}</> : <>Signing up <ImSpinner6 className="animate-spin"/></>}
                            </Button>
                        ):
                        (
                            <Button  size="default" className="w-full cursor-pointer transition-all duration-500 ease-in-out" disabled={loading}>
                                {!loading ? <>{action === "login" ? "Login" : "Unlock"} {BtnIcon}</> : <><Loader /> {action === "login" ? "Logging in" : "Unlocking"}</>}
                            </Button>
                        )
                    }
                </div>
            </form>
        </div>
    )
}
export default AuthForm
