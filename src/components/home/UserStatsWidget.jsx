import React from 'react';

export default function UserStatsWidget({className=""}) {
    return (
        <div className={`flex gap-4 p-10 min-w-0 ${className}`}>
            <div className="text-2xl font-bold">User Stats</div>
            <div className="userStatsWidgetDetails flex gap-10 items-center justify-center flex-1"></div>
        </div>
    );
}