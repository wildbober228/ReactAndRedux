import {useMemo} from "react";

export const useStudents = (students, query) => {
    const searchedStudents = useMemo( () => {
        return students.filter(student => student.secondName.toLowerCase().includes(query.toLowerCase()))
    }, [students, query])

    return searchedStudents;
}

