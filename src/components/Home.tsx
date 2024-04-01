import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=8734c4766281aca839b34feac6c89390')
         .then(response => response.json())
         .then(data => setMovies(data.results));
   }, []);

   return (
      <div className="container mx-auto">
         <header className="flex justify-between items-center py-4">
            <nav>
               <ul className="flex space-x-4">
                  <li className="text-gray-600">TV Series</li>
                  <li className="text-gray-600 font-bold">Movies</li>
                  <li className="text-gray-600">Animes</li>
               </ul>
            </nav>
         </header>
         <div className="mt-8">
            <h3 className="text-xl font-bold">Popular Movies</h3>
            <div className="grid grid-cols-4 gap-4 mt-4">
               {movies.slice(0, 4).map((movie: any) => (
                  <div key={movie.id}>
                     <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">{movie.title}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Home;