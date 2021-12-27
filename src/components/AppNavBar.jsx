import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";

const AppNavBar = () => {
    return (
        <Navbar>
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>

        </Navbar>
    );
};

export default AppNavBar;
