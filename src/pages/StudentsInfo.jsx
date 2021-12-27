import React from 'react';
import {useSelector} from "react-redux";
import {Button, Container, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import * as ReactRouterDOM from "react-router";

const StudentsInfo = () => {
    const useParams = ReactRouterDOM.useParams;
    const params = useParams()
    const students = useSelector(state => state)
    const student = (students.find((student) => student.id == params.id))
    return (
        <div>
            <Container>
                    <FormGroup>
                        <Label for="firstName">Name</Label>
                        <Input
                               value={student.firstName}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="secondName">SurName</Label>
                        <Input
                               value={student.secondName}
                        />
                    </FormGroup>
                
                    <FormGroup>
                        <Label for="studentAge">Age</Label>
                        <Input
                               value={student.studentAge}
                        />
                    </FormGroup>

                    <FormGroup>
                        <h1></h1>
                        <Button size="sm" color="primary" tag={Link} to={"/"}>Back</Button>
                    </FormGroup>
            </Container>
        </div>
    );
};

export default StudentsInfo;
