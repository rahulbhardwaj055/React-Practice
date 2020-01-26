import React from 'react';


const person = (props) => {
    return (
        <div>
            <p> Hi I am a {props.name} my age is {props.age} </p>
            <p> {props.children}</p>

            <span>
                <p> Hi I am a {props.name} my age is {props.age} </p>
                <p> {props.children}</p>
            </span>
        </div>

    )
}

export default person;