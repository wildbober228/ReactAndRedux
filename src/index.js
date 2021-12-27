import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import studentStore from "./reduxStore/studentStore";
import {Provider} from "react-redux";
import reducerStudent from "./reducers/reducerStudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getStudents} from "./API/studentService/actions";
import {BrowserRouter} from "react-router-dom";
import AppNavBar from "./components/AppNavBar";

const store = studentStore(reducerStudent);
const template = (
        <Provider store={store}>
            <BrowserRouter>
                <AppNavBar/>
                <App />
            </BrowserRouter>
        </Provider>
);


store.dispatch(getStudents(10,1)).then(() => {
    ReactDOM.render(template, document.getElementById('root'));
});

export default store

