import { tournaments } from '../../../data/tournaments';

export default function TournamentPage({ params }) {
  const tournament = tournaments.find((t) => t.slug === params.slug);

  if (!tournament) return <div>Not found</div>;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">{tournament.name}</h1>
      <p className="text-gray-600">{tournament.date}</p>
      <p className="mt-4">{tournament.description}</p>
      <h3 className="mt-6 font-semibold">Teams</h3>
      <ul className="list-disc list-inside text-gray-700">
        {tournament.teams.map((team) => (
          <li key={team}>{team}</li>
        ))}
      </ul>
    </div>
  );
}