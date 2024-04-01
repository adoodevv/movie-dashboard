import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface Movie {
   id: number;
   title: string;
   poster_path: string;
   genre_ids: number[];
}

interface Genre {
   id: number;
   name: string;
}

const RightSideBar: React.FC = () => {
   const [movies, setMovies] = useState<Movie[]>([]);
   const [genres, setGenres] = useState<Genre[]>([]);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=8734c4766281aca839b34feac6c89390')
         .then(response => response.json())
         .then(data => setGenres(data.genres));
   }, []);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=8734c4766281aca839b34feac6c89390')
         .then(response => response.json())
         .then(data => setMovies(data.results));
   }, []);

   const getGenres = (genreIds: number[]) => {
      return genreIds.map(id => {
         const genre = genres.find(g => g.id === id);
         return genre ? genre.name : '';
      }).join(', ');
   };

   return (
      <div className="right-sidebar mx-12">
         <div className="search-bar flex items-center rounded-full bg-white mt-4 mb-8">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-4" />
            <input type="text" placeholder="Search" className="pl-8 w-full py-1 rounded-full border border-gray-300" />
         </div>
         <div className="popular-movies">
            <h2 className="text-lg font-bold">Popular Movies</h2>
            <div className="grid grid-cols-1 gap-2 mt-4">
               {movies.slice(0, 3).map((movie: Movie) => (
                  <div key={movie.id} className="flex">
                     <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-16 h-auto rounded-lg"
                     />
                     <div>
                        <p className="font-bold text-sm ml-4">{movie.title}</p>
                        <p className="text-xs text-gray-400 ml-4">{getGenres(movie.genre_ids)}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <button className="bg-red-600 text-white py-2 px-4 rounded-lg mt-2 mb-8 w-full">See More</button>
      </div>
   );
};

export default RightSideBar;