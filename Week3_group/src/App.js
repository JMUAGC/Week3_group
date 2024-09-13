import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import Subscriptions from './components/Subscriptions';
import './App.css';

function App() {
    const [selectedSubscription, setSelectedSubscription] = useState(null);

    const addToCart = (subscription) => {
        setSelectedSubscription(subscription);
    };

    const clearSelections = () => {
        setSelectedSubscription(null);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<StreamList />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route
                        path="/cart"
                        element={<Cart selectedSubscription={selectedSubscription} />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/subscriptions"
                        element={
                            <Subscriptions
                                addToCart={addToCart}
                                clearSelections={clearSelections}
                                selectedSubscription={selectedSubscription}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
