import React from 'react';
import "./style.css";

const Background = (props) => (
    <div className="background">
        {props.children};
    </div>
)

export default Background;