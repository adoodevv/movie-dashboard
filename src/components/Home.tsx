import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';

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
   const [movies, setMovies] = useState<Movie[]>([]);
   const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
   const [genres, setGenres] = useState<Genre[]>([]);
   const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=8734c4766281aca839b34feac6c89390')
         .then(response => response.json())
         .then(data => setGenres(data.genres));
   }, []);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8734c4766281aca839b34feac6c89390')
         .then(response => response.json())
         .then(data => {
            setMovies(data.results);
            setFeaturedMovie(data.results[2]);
         });
   }, []);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8734c4766281aca839b34feac6c89390')
         .then(response => response.json())
         .then(data => {
            setNowPlaying(data.results);
         });
   }, []);

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
                  <button className="bg-gray-600 bg-opacity-50 text-white px-4 py-2 rounded-full items-center hover:bg-gray-700">
                     <FontAwesomeIcon icon={faAngleRight} className="text-white" />
                  </button>
               </div>
               <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-4xl font-bold text-white">{featuredMovie.title}</h2>
                  <div className="flex mt-2">
                     <p className="text-l text-gray-200">{getGenres(featuredMovie.genre_ids).toUpperCase()}</p>
                     <p className="text-white ml-4">%{Math.ceil(featuredMovie.vote_average * 10)} Match</p>
                  </div>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-lg mt-4 hover:scale-105">Watch</button>
                  <button className="bg-gray-600 bg-opacity-50 text-white py-2 px-4 rounded-lg mt-4 ml-4 hover:scale-105">
                     <FontAwesomeIcon icon={faPlus} className="text-white" />
                  </button>
               </div>
            </div>
         )}
         <div className="upcoming-movies mt-8 mb-8">
            <div className="flex justify-between items-center">
               <h3 className="text-l text-gray-600 font-bold">Upcoming Movies</h3>
               <div className="buttons">
                  <button className="border-2 border-gray-600 text-gray-600 px-2 rounded-full items-center hover:bg-gray-200">
                     <FontAwesomeIcon icon={faAngleLeft} className="text-gray-600" />
                  </button>
                  <button className="border-2 border-gray-600 text-gray-600 px-2 rounded-full items-center hover:bg-gray-200 ml-4">
                     <FontAwesomeIcon icon={faAngleRight} className="text-gray-600" />
                  </button>
               </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
               {movies.slice(3, 7).map((movie: Movie) => (
                  <div key={movie.id}>
                     <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-32 h-auto rounded-lg"
                     />
                     <p className="text-gray-600">{movie.title}</p>
                  </div>
               ))}
            </div>
         </div>
         <div className="now-playing">
            <div className="flex justify-between items-center">
               <h3 className="text-l text-gray-600 font-bold">Now Playing</h3>
               <div className="buttons">
                  <button className="border-2 border-gray-600 text-gray-600 px-2 rounded-full items-center hover:bg-gray-200">
                     <FontAwesomeIcon icon={faAngleLeft} className="text-gray-600" />
                  </button>
                  <button className="border-2 border-gray-600 text-gray-600 px-2 rounded-full items-center hover:bg-gray-200 ml-4">
                     <FontAwesomeIcon icon={faAngleRight} className="text-gray-600" />
                  </button>
               </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
               {nowPlaying.slice(0, 4).map((movie: Movie) => (
                  <div key={movie.id}>
                     <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-32 h-auto rounded-lg"
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