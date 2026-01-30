import React from 'react';
import CasualButton from "./components/home/CasualButton.jsx"
import RankedButton from "./components/home/RankedButton.jsx"
import NavBar from "./components/layout/NavBar.jsx"
import LeaderboardWidget from "./components/home/LeaderboardWidget.jsx"
import DailyChallengeWidget from "./components/home/DailyChallengeWidget.jsx"
import MatchFeedWidget from "./components/home/MatchFeedWidget.jsx"
import UserStatsWidget from "./components/home/UserStatsWidget.jsx"

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <NavBar />

      <div className="flex gap-5 p-5 pt-24 bg-neutral-950 min-w-0 align-items-center justify-center">
        <CasualButton />
        <RankedButton />
      </div>
      <div className="flex-1 p-5 overflow-y-auto overflow-x-hidden min-w-0 border border-neutral-800">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 min-w-0 border border-neutral-800">
            <UserStatsWidget className="rounded-lg bg-neutral-900 text-white"/>
            <DailyChallengeWidget className="rounded-lg bg-neutral-900 text-white lg:col-span-3" />
            <LeaderboardWidget className="rounded-lg bg-neutral-900 text-white md:col-span-2 lg:row-span-2" />
            <MatchFeedWidget className="rounded-lg bg-neutral-900 text-white md:col-span-2 lg:row-span-2" />
        </div>
      </div>
    </div>
  )
}

