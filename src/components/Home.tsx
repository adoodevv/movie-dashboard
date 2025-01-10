import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UpcomingMovies from './UpcomingMovies';
import NowPlaying from './NowPlaying';

interface Movie {
   id: number;
   title: string;
   poster_path: string;
   backdrop_path: string;
   genre_ids: number[];
   vote_average: number;
}

interface Genre {
   id: number;
   name: string;
}

const Home: React.FC = () => {
   const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
   const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([]);
   const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
   const [genres, setGenres] = useState<Genre[]>([]);

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
         .then(response => response.json())
         .then(data => setGenres(data.genres));
   }, []);

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
         .then(response => response.json())
         .then(data => {
            setFeaturedMovies(data.results);
            setFeaturedMovie(data.results[0]);
         });
   }, []);

   const nextMovie = () => {
      let newIndex = currentMovieIndex + 1;
      if (newIndex >= featuredMovies.length) {
         newIndex = 0;
      }
      setCurrentMovieIndex(newIndex);
      setFeaturedMovie(featuredMovies[newIndex]);
   };

   useEffect(() => {
      const timer = setInterval(nextMovie, 5000);
      return () => clearInterval(timer);
   }, [featuredMovies, currentMovieIndex]);

   const getGenres = (genreIds: number[]) => {
      return genreIds.map(id => {
         const genre = genres.find(g => g.id === id);
         return genre ? genre.name : '';
      }).join(', ');
   };

   return (
      <div className="home-movies mx-12">
         <header className="flex justify-between items-center py-4">
            <nav>
               <ul className="flex space-x-4">
                  <li className="text-gray-600">TV Series</li>
                  <li className="text-gray-600 font-bold">Movies</li>
                  <li className="text-gray-600">Animes</li>
               </ul>
            </nav>
         </header>
         {featuredMovie && (
            <div className="relative">
               <img
                  src={`https://image.tmdb.org/t/p/w1280${featuredMovie.backdrop_path}`}
                  alt={featuredMovie.title}
                  className="w-full h-48 md:h-auto object-cover rounded-3xl"
               />
               <div className="absolute bottom-0 left-0 p-2 md:p-4">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">{featuredMovie.title}</h2>
                  <div className="flex flex-wrap mt-1 md:mt-2">
                     <p className="text-sm md:text-l text-gray-200">{getGenres(featuredMovie.genre_ids).toUpperCase()}</p>
                     <p className="text-white ml-2 md:ml-4">%{Math.ceil(featuredMovie.vote_average * 10)} Match</p>
                  </div>
                  <div className="flex mt-2">
                     <button className="bg-red-600 text-white py-1 md:py-2 px-3 md:px-4 rounded-lg text-sm md:text-base">Watch</button>
                     <button className="bg-gray-600 bg-opacity-50 text-white py-1 md:py-2 px-3 md:px-4 rounded-lg ml-2 md:ml-4">
                        <FontAwesomeIcon icon={faPlus} className="text-white" />
                     </button>
                  </div>
               </div>
            </div>
         )}
         <UpcomingMovies />
         <NowPlaying />
      </div>
   );
};

export default Home;