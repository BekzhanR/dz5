import React from 'react';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Outlet/>
            <footer>30.01.24</footer>
        </div>

    );
};

export default Layout;