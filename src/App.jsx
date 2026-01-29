import React from 'react';
import CasualButton from "./components/home/CasualButton.jsx"
import RankedButton from "./components/home/RankedButton.jsx"

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center gap-6">
      <CasualButton />
      <RankedButton />
    </div>
  )
}