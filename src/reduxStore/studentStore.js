import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

const studentStore = (students) => {
    return createStore(students, compose(
        applyMiddleware(thunk),
        composeWithDevTools()
    ));
};
export default studentStore
