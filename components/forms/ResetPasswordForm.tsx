"use client";

import React, {useState} from 'react'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ImSpinner6} from "react-icons/im";
import { FaLink } from "react-icons/fa";
import {IoIosWarning} from "react-icons/io";

const ResetPasswordForm = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="grid gap-4 lg:gap-6 mt-6">
            <div className="gap-y-4 lg:gap-6 space-y-6">
                <div className="flex flex-col gap-y-3">
                    <Label htmlFor="email">Work Email Address</Label>
                    <div>
                        <Input name="email" placeholder="yourname@oceanoftechsa.com" type="email" required autoComplete="email" disabled={loading}/>
                        <p className="text-xs text-rose-500 flex items-center gap-2 mt-1"><IoIosWarning /> Email address is required</p>
                    </div>
                </div>

                <Button type="submit" size="lg" className="w-full cursor-pointer transition-all duration-500 ease-in-out" disabled={loading} onClick={() => {setLoading(true)}}>
                    {
                        !loading ? <>Send password reset link <FaLink /></> : <>Sending link<ImSpinner6 className="animate-spin"/></>
                    }
                </Button>
            </div>
        </div>
    )
}
export default ResetPasswordForm
