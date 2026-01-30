import React from 'react';

export default function RankedButton({className=""}) {
    return (
        <div className={`
        bg-red-800
        text-white 
        p-6
        rounded-lg 
        text-4xl
        cursor-pointer 
        transition 
        duration-200
        hover:bg-red-700
        active:bg-red-600
        ${className}`}>
            Ranked
        </div>
    );
}