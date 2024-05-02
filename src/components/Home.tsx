import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
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
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=8734c4766281aca839b34feac6c89390')
         .then(response => response.json())
         .then(data => setGenres(data.genres));
   }, []);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8734c4766281aca839b34feac6c89390')
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
                  className="w-full h-auto rounded-3xl"
               />
               <div className="absolute top-0 right-0 text-white p-4">
                  <button onClick={nextMovie} className="bg-gray-600 bg-opacity-50 text-white px-4 py-2 rounded-full items-center hover:bg-gray-700">
                     <FontAwesomeIcon icon={faAngleRight} className="text-white" />
                  </button>
               </div>
               <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-4xl font-bold text-white">{featuredMovie.title}</h2>
                  <div className="flex mt-2">
                     <p className="text-l text-gray-200">{getGenres(featuredMovie.genre_ids).toUpperCase()}</p>
                     <p className="text-white ml-4">%{Math.ceil(featuredMovie.vote_average * 10)} Match</p>
                  </div>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-lg mt-4">Watch</button>
                  <button className="bg-gray-600 bg-opacity-50 text-white py-2 px-4 rounded-lg mt-4 ml-4">
                     <FontAwesomeIcon icon={faPlus} className="text-white" />
                  </button>
               </div>
            </div>
         )}
         <UpcomingMovies />
         <NowPlaying />
      </div>
   );
};

export default Home;