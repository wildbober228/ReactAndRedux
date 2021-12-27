import '../App.css';
import React, {useState} from "react";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import StudentForm from "../components/StudentForm";
import {useDispatch} from "react-redux";
import {addStudent, getStudents} from "../API/studentService/actions";
import StudentFilter from "../components/StudentFilter";
import StudentsList from "../components/StudentsList";
import './Students.css';
import {usePagination} from "../hooks/usePagination";
import {getPageCount} from "../utils/pages";

function Students() {
    const [modal, setModal] = useState(false)
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    let pagesArray = usePagination(getPageCount(39,10), page)

    const dispatch = useDispatch()

    const onChangePage = (page) => {
        setPage(page)
        dispatch(getStudents(10,page))
    }

    const createStudent = (newStudent) => {
        dispatch(addStudent(newStudent));
        setModal(false);
    }


    return (
        <div className="App">
            <MyButton style ={{marginTop: '30px'}} onClick = {() => setModal(true)}>
                Add Student
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <StudentForm create ={createStudent} setModal={setModal}/>
            </MyModal>

            <StudentFilter
                query = {query}
                setQuery = {setQuery}
            />

            <StudentsList
                query = {query}>
            </StudentsList>

            <div className = "page__wrapper">
                {pagesArray.map(p =>
                        <span
                            className={page === p ? 'page page__current' : 'page'}
                            key = {p}
                            onClick={() => {onChangePage(p)}}
                        >
                {p}
            </span>
                )}
            </div>

        </div>
    );
}

export default Students;
