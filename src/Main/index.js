import React from 'react';
import "./style.css";

const Main = (props) => (
    <div className="main">
        {props.children};
    </div>
)

export default Main;