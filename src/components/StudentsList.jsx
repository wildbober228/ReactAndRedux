import React from 'react';
import {useSelector} from 'react-redux';
import Student from './Student';
import {getStudents} from "../API/studentService/actions";
import {useStudents} from "../hooks/useStudents";


const StudentsList = (query) => {

    const allStudents = useSelector(state => state);
    const students = useStudents(allStudents, query.query)
    if(!students.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                Student Not Found
                <br/>
            </h1>
        )
    }

    return (
        <div>
            <ul key = {Date.now}>
                {students.map(student =>
                    <Student {...student}/>
                )}
            </ul>
        </div>
    );
}

export default StudentsList;
