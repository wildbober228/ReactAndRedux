import React, {useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";

const StudentForm = ({create, setModal, id = -1, firstName = '', secondName = '', studentAge = 0}) => {

    const [student, setStudent] = useState({firstName : firstName, secondName : secondName, studentAge: studentAge})


    const onSubmit = (e) => {
        e.preventDefault()
        const newStudent ={
            ...student,
        }
        if(id === -1) {
            create(newStudent)
        }
        else {
            create(id, newStudent)
        }
        setStudent({firstName: '', secondName: '', studentAge: 0})
    }

    const onClose = () => {
        setModal(false)
        setStudent({firstName: '', secondName: '', studentAge: 0})
    }

    const onFirstNameChange = (e) => {
        const firstName = e.target.value;
        setStudent({...student,firstName: firstName});
    }

    const onSecondNameChange = (e) => {
        const secondName = e.target.value;
        setStudent({...student,secondName: secondName});
    }

    const onStudentAgeChange = (e) => {
        const studentAge = parseInt(e.target.value);
        setStudent({...student, studentAge:  studentAge});
    }

    return (
        <div>
            <div>
                <Container>
                    <Form onSubmit={onSubmit} className='add-student-form'>
                        <FormGroup>
                            <Label for="firstName">Name</Label>
                            <Input type="text" placeholder="firstName" autoFocus
                                   value={student.firstName}
                                   onChange={onFirstNameChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="secondName">SurName</Label>
                            <Input type="text" placeholder="secondName"
                                   value={student.secondName}
                                   onChange={onSecondNameChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="studentAge">Age</Label>
                            <Input type="number" placeholder="studentAge"
                                   value={student.studentAge}
                                   onChange={onStudentAgeChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <h1></h1>
                            <Button size="large" color="primary" type="submit">Confirm</Button>{' '}
                        </FormGroup>
                    </Form>
                            <Button size="large" color="secondary" onClick ={onClose}>Cancel</Button>
                </Container>
            </div>
        </div>
    );
};

export default StudentForm;
