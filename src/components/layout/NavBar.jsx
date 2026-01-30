import React from 'react';

export default function NavBar() {
  return (
    <div className="fixed top-0 inset-x-0 bg-neutral-900 text-white p-4 z-50 flex items-center min-w-0">
      <div className="text-2xl font-bold">RankedCS</div>

      <div className="flex gap-10 items-center justify-center flex-1">
        <div className="hover:underline cursor-pointer">Home</div>
        <div className="hover:underline cursor-pointer">Leaderboard</div>
        <div className="hover:underline cursor-pointer">About</div>
        <div className="hover:underline cursor-pointer">Contact</div>
      </div>

      <img
        src="/src/resources/profile.png"
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer"
      />
    </div>
  );
}