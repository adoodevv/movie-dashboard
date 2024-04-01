import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const RightSideBar: React.FC = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=8734c4766281aca839b34feac6c89390')
         .then(response => response.json())
         .then(data => setMovies(data.results));
   }, []);

   return (
      <div className="right-sidebar mx-12">
         <div className="search-bar flex items-center rounded-full bg-white mt-4 mb-8">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-4" />
            <input type="text" placeholder="Search" className="pl-8 w-full py-1 rounded-full border border-gray-300" />
         </div>
         <div className="popular-movies">
            <h2 className="text-lg font-bold">Popular Movies</h2>
            <div className="grid grid-cols-1 gap-2 mt-4">
               {movies.slice(0, 3).map((movie: any) => (
                  <div key={movie.id} className="flex">
                     <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-16 h-auto rounded-lg"
                     />
                     <p className="font-bold text-sm ml-4">{movie.title}</p>
                  </div>
               ))}
            </div>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-2 w-full">See More</button>
         </div>
      </div>
   );
};

export default RightSideBar;