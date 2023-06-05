import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">404 Not Found</h1>
            <p className="text-lg mb-8">Oops! The page you are looking for does not exist.</p>
            <img src="/images/error-image.png" alt="Error" className="max-w-sm mb-8" />
            <a href="/" className="text-blue-500 text-lg">Go back to the homepage</a>
        </div>
    );
};

export default NotFoundPage;
