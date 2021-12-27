import React from 'react';
import MyInput from "../components/UI/MyInput/MyInput";

const StudentFilter = ({query, setQuery}) => {
    return (
        <div>
            <MyInput
                value = {query}
                onChange = {e => setQuery(e.target.value)}
                placeholder="Find..."
            />
        </div>
    );
};

export default StudentFilter;
