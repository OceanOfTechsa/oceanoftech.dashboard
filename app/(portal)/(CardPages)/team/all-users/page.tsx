import React from 'react'
import BackButton from "@/components/BackButton";
import {DataTableDemo} from "@/components/table";

const AllUsersPage = () => {
    return (
        <>
            <BackButton title="All users" />
            <DataTableDemo />
        </>
    )
}
export default AllUsersPage
