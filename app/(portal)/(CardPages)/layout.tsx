import React from 'react'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div className="p-6 border rounded-lg flex flex-col gap-3 items-start justify-start w-full bg-gray-100 dark:bg-[#171717]">
            {children}
        </div>
    )
}
export default Layout
