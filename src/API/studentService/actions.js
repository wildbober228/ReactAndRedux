import axios from 'axios';

const _updateStudents = (students) => ({
    type: 'UPDATE_STUDENTs',
    students
});

export const updateStudents = (students) => {
    return (dispatch) => {
            dispatch(_updateStudents(students));
    };
};

const _getContentRange = (contentRange) => ({
    type: 'GET_CONTENT_RANGE',
    contentRange
});

export const getContentRange = () => {
    return (dispatch) => {
        return axios.get('/students').then(result => {
            const contentRange = result.headers['content-range']
            console.log(contentRange)
            dispatch(_getContentRange(contentRange));
        });
    };
};

const _getStudents = (students) => ({
    type: 'GET_STUDENTs',
    students
});

export const getStudents = (size, page) => {
    return (dispatch) => {
        return axios.get('/students', {
            params: {
                size: size,
                page: page
            }}).then(result => {
            const students = [];
            result.data.forEach(item => {
                students.push(item);
            });
            dispatch(_getStudents(students));
        });
    };
};

const _removeStudent = ({ id } = {}) => ({
    type: 'REMOVE_STUDENT',
    id
});

export const removeStudent = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`/students/${id}`).then(() => {
            dispatch(_removeStudent({ id }));
        })
    }
};

const _addStudent = (student) => ({
    type: 'ADD_STUDENT',
    student
});

export const addStudent = (studentData = {

    firstName: '',
    secondName: '',
    studentAge: 0
}) => {
    return (dispatch) => {
        const student = {
            firstName: studentData.firstName,
            secondName: studentData.secondName,
            studentAge: studentData.studentAge
        };

        return axios.post('/students/create', student).then(result => {
            dispatch(_addStudent(result.data));
        });
    };
};

const _editStudent = (id, student) => ({
    type: 'EDIT_STUDENT',
    id,
    student
});

export const editStudent = (id, student) => {

    return (dispatch) => {
        return axios.put(`/students/${id}`, student).then(() => {
            dispatch(_editStudent(id, student));
        });
    }
};

const _getStudent = (id, student) =>({
    type: 'GET_STUDENT',
    id,
    student
});

export const getStudent = (id) => {
    console.log("GET ID "+ id)
    return (dispatch) => {
        return axios.get(`/students/${id}`).then(result => {
            const student = result.data;
            dispatch(_getStudent(id, student));
        });
    };
};


