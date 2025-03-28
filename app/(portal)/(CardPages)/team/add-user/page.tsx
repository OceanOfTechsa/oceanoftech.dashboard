import React from 'react'
import BackButton from "@/components/BackButton";
import AddNewUserForm from "@/components/forms/AddNewUserForm";

const AddUserPage = () => {
    return (
        <>
            <BackButton title="Add new member" />
            <AddNewUserForm />
        </>
    )
}
export default AddUserPage
