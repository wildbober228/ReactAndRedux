import React from 'react';
import {Button} from "reactstrap";
import {removeStudent} from "../API/studentService/actions";
import {useDispatch} from "react-redux";

const DeleteForm = ({id, setModal, firstName, secondName}) => {
    const dispath = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        dispath(removeStudent({id}))
        setModal(false)
    }

    const onClose = (e) => {
        setModal(false)
    }

    return (

        <div>
            <h2>Are you sure you want to delete {firstName} {secondName}</h2>
            <Button size="sm" color="danger" onClick = {onClose}> NO </Button>
            <Button size="sm" color="primary" onClick = {onSubmit}> YES </Button>
        </div>
    );
};

export default DeleteForm;
