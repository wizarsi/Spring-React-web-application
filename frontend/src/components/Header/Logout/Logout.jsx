
import React from 'react';
import logout from "../../../myAssets/img/log-out.png";

const Logout = (props) => {
    return (
        <a href="/" onClick={props.onClick}>
            <img src={logout} title="Logout" alt="Logout"/>
        </a>
    );
};

export default Logout;