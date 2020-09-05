import React from 'react';

const Greet = (props) => {
    console.log(React.version)
    return <h1>Hello {props.name} a.k.a. {React.version}</h1>
}

export default Greet