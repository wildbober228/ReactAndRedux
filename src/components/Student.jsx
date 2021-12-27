import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {Button, ButtonGroup, Table} from "reactstrap";
import {removeStudent} from '../API/studentService/actions.js';
import MyButton from "./UI/button/MyButton";
import StudentForm from "./StudentForm";
import MyModal from "./UI/MyModal/MyModal";
import DeleteForm from "./DeleteForm";
import {editStudent} from "../API/studentService/actions";

const Student = ({id, firstName, secondName, studentAge}) => {
    const [modalDelete, setModalDelete] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const dispatch = useDispatch()

    const updateStudent = (id, updatableStudent) => {
        dispatch(editStudent(id, updatableStudent));
    }

    return (
    <div>
        <Table className="mt-4">
            <thead>
            <tr>
                <th width="25%">Name</th>
                <th width="25%">Surname</th>
                <th width="25%">Age</th>
                <th width="20%">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr key={id}>
                <td style={{whiteSpace: 'nowrap'}}>{firstName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{secondName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{studentAge} y.o.</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="info" tag={Link} to={"/info/"+ id}>INFO</Button>
                        <Button size="sm" color="danger" onClick = {() => setModalDelete(true)}>
                            Delete
                        </Button>
                        <MyModal visible={modalDelete} setVisible={setModalDelete}>
                            <DeleteForm
                                id ={id}
                                setModal={setModalDelete}
                                firstName={firstName}
                                secondName={secondName}
                            />
                        </MyModal>
                    </ButtonGroup>
                    <MyButton style ={{marginTop: '30px'}} onClick = {() => setModalEdit(true)}>
                        Edit Student
                    </MyButton>

                    <MyModal visible={modalEdit} setVisible={setModalEdit}>
                        <StudentForm
                            create = {updateStudent}
                            setModal={setModalEdit}
                            id = {id}
                            firstName={firstName}
                            secondName={secondName}
                            studentAge={studentAge}
                        />
                    </MyModal>
                </td>
            </tr>
            </tbody>
        </Table>
    </div>
    );
};


export default connect()(Student);
