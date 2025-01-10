import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface Movie {
   id: number;
   title: string;
   poster_path: string;
   backdrop_path: string;
   genre_ids: number[];
   vote_average: number;
}

const NowPlaying: React.FC = () => {
   const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

   const [start, setStart] = useState(0);

   const handleForward = () => {
      setStart(prevStart => prevStart + 2);
   };

   const handleBack = () => {
      setStart(prevStart => Math.max(prevStart - 2, 0));
   };

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
         .then(response => response.json())
         .then(data => {
            setNowPlaying(data.results);
         });
   }, []);

   return (
      <div className="now-playing mb-4">
         <div className="flex justify-between items-center">
            <h3 className="text-l text-gray-600 font-bold">Now Playing</h3>
            <div className="buttons">
               <button onClick={handleBack} className="border-2 border-gray-600 text-gray-600 px-2 rounded-full items-center hover:bg-gray-200">
                  <FontAwesomeIcon icon={faAngleLeft} className="text-gray-600" />
               </button>
               <button onClick={handleForward} className="border-2 border-gray-600 text-gray-600 px-2 rounded-full items-center hover:bg-gray-200 ml-4">
                  <FontAwesomeIcon icon={faAngleRight} className="text-gray-600" />
               </button>
            </div>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-4">
            {nowPlaying.slice(start, start + 4).map((movie: Movie) => (
               <div key={movie.id}>
                  <img
                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                     alt={movie.title}
                     className="w-full md:w-32 h-auto rounded-lg"
                  />
                  <p className="text-sm md:text-base text-gray-600 mt-1">{movie.title}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default NowPlaying;