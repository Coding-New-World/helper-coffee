import React from 'react';

const handleClick = (action) => {
    console.log(action);
}

export default function Button({ children, action }) {
    return (
        <button onClick={() => handleClick(action)}>
            {children}
        </button>
    );
}