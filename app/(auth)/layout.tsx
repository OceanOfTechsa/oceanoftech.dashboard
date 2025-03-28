import React from 'react';
import Image from "next/image";
import {ThemeToggle} from "@/components/ThemeToggle";

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div className="flex min-h-screen h-auto relative">
            <div className="hidden lg:flex items-center justify-center flex-1 relative">
                <div className="absolute top-0 h-full">
                    <Image src="/auth-cover.avif" alt="auth" className="object-cover h-full" width="3500" height="1800" loading="eager" priority={true} />
                </div>
                <div className="absolute top-1 end-1 0 z-10">
                    <ThemeToggle />
                </div>
            </div>
            {children}
        </div>
    )
}
export default Layout
