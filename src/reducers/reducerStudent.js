
const studentReducerDefaultState = {
    students: []
};

const reducerStudent = (state  = studentReducerDefaultState, action) => {

    switch (action.type) {

        case 'UPDATE_STUDENTs':
            return action.students


        case 'ADD_STUDENT':
            return [
                ...state,
                action.student
            ];

        case 'REMOVE_STUDENT':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_STUDENT':
            return state.map((student) => {
                if (student.id === action.id) {
                    return {
                        ...student,
                        ...action.updates
                    };
                } else {
                    return student;
                }
            });

        case 'GET_STUDENTs':
            return action.students;

        case 'GET_CONTENT_RANGE':
            return action.contentRange;


        case 'GET_STUDENT':
            return state.map((student) => {
                if (student.id !== action.id) {
                    return {
                        ...student
                    };
                } else {
                    console.log("RETURN")
                    console.log(student)
                    return student;
                }
            })

        default:
            return state;
    }
};

export default reducerStudent
