import React, { useState } from 'react';
import list from './data';

function Subscriptions({ addToCart, clearSelections, selectedSubscription }) {
    const [error, setError] = useState('');

    const handleAdd = (item) => {
        if (selectedSubscription) {
            if (selectedSubscription.id === item.id) {
                setError('Subscription already selected');
            } else {
                setError('Only one subscription per customer');
            }
        } else {
            addToCart(item);
            setError('');
        }
    };

    return (
        <div>
            <h2>Subscriptions Page</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {list.map((item) => (
                    <li key={item.id} style={{ marginBottom: '20px', listStyle: 'none' }}>
                        <img src={item.img} alt={item.service} style={{ width: '50px', height: '50px' }} />
                        <h3>{item.service}</h3>
                        <p>{item.serviceInfo}</p>
                        <p>Price: ${item.price}</p>
                        <button
                            onClick={() => handleAdd(item)}
                            disabled={!!selectedSubscription}
                        >
                            {selectedSubscription && selectedSubscription.id === item.id ? 'In Cart' : 'Add'}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={clearSelections}>Clear Selections</button>
        </div>
    );
}

export default Subscriptions;

