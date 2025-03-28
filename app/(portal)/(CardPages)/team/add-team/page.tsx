import React from 'react'
import AddNewTeamForm from "@/components/forms/AddNewTeamForm";
import BackButton from "@/components/BackButton";

const AddTeamPage = () => {
    return (
        <>
            <BackButton title="Add new team" />
            <AddNewTeamForm />
        </>
    )
}
export default AddTeamPage
