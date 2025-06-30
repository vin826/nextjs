'use client';

import { tournaments } from '../data/tournaments';
import { TournamentCard } from './TournamentCard';
import { Tournament } from '../data/types';

export function TournamentList() {
  return (
    <div className="grid gap-4">
      {tournaments.map((tournament) => (
        <TournamentCard key={tournament.slug} tournament={tournament} />
      ))}
    </div>
  );
}