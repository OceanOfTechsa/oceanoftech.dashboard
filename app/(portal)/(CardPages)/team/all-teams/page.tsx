import React from 'react'
import BackButton from "@/components/BackButton";
import {DataTableDemo} from "@/components/table";

const AllTeamsPage = () => {
    return (
        <>
            <BackButton title="All teams" />
            <DataTableDemo />
        </>
    )
}
export default AllTeamsPage
