import React from "react";

function Box(props) {
    const clickMe = () => {
        alert(`${props.name}의 리액트 시작!`)
    }

    return (
        <div className="box">
            Box{props.num}
            {props.name}
            <button onClick={clickMe}>Click!</button>
        </div>
    )
}

export default Box;