import React from "react";

const boxStyle = {
    width: '200px',
    height: '200px',
    display: 'inline-block',
    margin: '5px'
}

export default function Box(props) {
    return(
        <div style={{...boxStyle, ...{backgroundColor:`${props.color}`}}}></div>
    );
}