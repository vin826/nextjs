'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tournament } from '../data/types';



export function TournamentCard({ tournament}: { tournament: Tournament } ) {
  return (
    <Link href={`/tournaments/${tournament.slug}`}>
      <motion.div
        whileTap={{ scale: 0.97 }}
        className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
      >
        <h2 className="text-xl font-semibold">{tournament.name}</h2>
        <p className="text-sm text-gray-600">{tournament.date}</p>
        <p className="mt-2 text-gray-700 line-clamp-3 group-hover:line-clamp-none transition-all">
          {tournament.description}
        </p>
      </motion.div>
    </Link>
  );
}