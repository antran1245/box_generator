import React from "react";


export default function Box(props) {
    const boxStyle = {
        width: `${props.size}px`,
        height: `${props.size}px`,
        display: 'inline-block',
        margin: '5px',
        backgroundColor: props.color
    }
    return(
        <div style={boxStyle}></div>
    );
}