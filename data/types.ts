export interface Tournament {
  slug: string;
  name: string;
  date: string;
  description: string;
  teams: string[];
}
export interface TournamentListProps {
  tournaments: Tournament[];
}
export interface TournamentCardProps {
  tournament: Tournament;
}


