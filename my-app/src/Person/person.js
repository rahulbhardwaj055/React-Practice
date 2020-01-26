import React from 'react';


const person = () => {
    return <p>Hi I am a very nice person{
        Math.floor(Math.random() * 30)
    }</p>
}

export default person;