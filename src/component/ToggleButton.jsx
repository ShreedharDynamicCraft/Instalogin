import React from 'react';

const ToggleButton = ({ isSignUp, toggleView }) => {
return (
    <button onClick={toggleView}>
{isSignUp ? 'Have an account? Log in' : 'Don\'t have an account? Sign up'}
    </button>
);
};

export default ToggleButton;
