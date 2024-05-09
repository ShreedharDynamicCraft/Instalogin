import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import ToggleButton from '../ToggleButton';

const UserPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleView = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="UserPage">
            <h1>Instagram</h1>
            {isSignUp ? <SignUpForm /> : <LoginForm />}
           
            <ToggleButton isSignUp={isSignUp} toggleView={toggleView} />
        </div>
    );
};

export default UserPage;
