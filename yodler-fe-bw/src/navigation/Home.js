import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Yodler Design Challenge</h1>
            <p><Link to="/signup">Register</Link></p>
            <p><Link to="/admin">Admin Page</Link></p>
        </div>
    )
};

export default Home;