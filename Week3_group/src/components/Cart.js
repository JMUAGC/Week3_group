import React from 'react';

function Cart({ selectedSubscription }) {
    return (
        <div>
            <h2>Cart</h2>
            {selectedSubscription ? (
                <div>
                    <h3>{selectedSubscription.service}</h3>
                    <p>{selectedSubscription.serviceInfo}</p>
                    <p>Price: ${selectedSubscription.price}</p>
                </div>
            ) : (
                <p>No subscriptions in the cart</p>
            )}
        </div>
    );
}

export default Cart;

