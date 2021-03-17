import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {bedType} = useParams();
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome {loggedInUser.name}</h1>
            <h3>Let's book a {bedType} Room.</h3>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Book;