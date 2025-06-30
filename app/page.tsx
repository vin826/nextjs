
import { TournamentList } from '../components/TournamentList';

export default function HomePage() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">🏆 Featured Tournaments</h1>
      <TournamentList />
    </main>
  );
}
