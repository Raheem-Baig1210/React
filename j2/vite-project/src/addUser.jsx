import React from "react";

const AddUser = (props) => {
    const name = props.name
    const email = props.email
    return (
        <>
        <span>{name},{email}</span>
        </>
    )
}

export default AddUser