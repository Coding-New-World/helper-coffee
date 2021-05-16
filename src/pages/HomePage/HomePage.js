import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [shopCode, setShopCode] = useState('');
    const handleInputChange = (event) => setShopCode(event.target.value);

    return (
        <main>
            <h1> Welcome to Café Helper </h1>
            <h3>Enter the Shop code bellow</h3>

            <h3>Tip: check the QR code of the bar !</h3>

            <input onChange={handleInputChange} required />

            <Link to={`/shop/${shopCode}`}>Enter Shop !</Link>
        </main>
    );
}