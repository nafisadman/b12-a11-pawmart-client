import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <Navigate to="/pets"></Navigate>
    );
};

export default Home;