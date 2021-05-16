import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button';

const data = { 
    '123': {
        shopName: '123',
        availableCoffees: 5
    }
}

export default function ShopPage() {
    let { hashId } = useParams();
    const [shopData, setShopData] = useState({});

    useEffect(() => {
        const fetchedData = data[hashId];

        setShopData(fetchedData);
    });

    return (
        <main>
            <h1>{shopData.shopName}</h1>
            <h3>{shopData.availableCoffees}</h3>

            <Button action='donate'> Donate Coffee </Button>
            <Button action='drink'> Drink Coffee </Button>
        </main>
    );
}