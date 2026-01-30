import React from 'react';

export default function CasualButton({className=""}) {
    return (
        <div className={`
        bg-blue-800
        text-white 
        p-6
        rounded-lg 
        text-4xl
        cursor-pointer 
        transition 
        duration-200
        hover:bg-blue-700
        active:bg-blue-600
        ${className}`}>
            Casual
        </div>
    );
}