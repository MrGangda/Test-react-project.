import React from 'react';

interface ErrorMessageProps {
    error: string
}

const ErrorMessage = ({error}: ErrorMessageProps) => {
    return (
        <p className='post__status' style={{color: "red"}}>{error}</p>
    );
};

export default ErrorMessage;