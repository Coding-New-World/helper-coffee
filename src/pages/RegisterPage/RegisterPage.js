import React from 'react';

export default function RegisterPage() {
    const handleSubmit = () => {};

    return (
        <main>
            <h1>Register as Shop</h1>
            <form onSubmit={handleSubmit}>
                <input name='shopName'></input>
                <input location='shopLocation'></input>
                <button type='submit'>Register</button>
            </form>
        </main>
    ); 
}