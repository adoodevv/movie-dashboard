import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
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
            <div className="flex items-center mb-4">
               <img
                  src="path_to_big_image.jpg"
                  alt="Movie Title"
                  className="w-64 h-auto mr-4"
               />
               <div>
                  <h2 className="text-4xl font-bold">JUMANJI</h2>
                  <p className="text-gray-600">ACTION, ADVENTURE, COMEDY</p>
                  <p className="text-gray-600">94% Match</p>
                  <button className="bg-red-500 text-white py-2 px-4 rounded mr-2">
                     Watch
                  </button>
                  <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded">
                     <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  </button>
               </div>
            </div>

            <div className="mt-8">
               <h3 className="text-xl font-bold">Best Artists</h3>
               <div className="grid grid-cols-4 gap-4 mt-4">
                  <div>
                     <img
                        src="path_to_image.jpg"
                        alt="Artist Name"
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">Artist Name</p>
                  </div>
               </div>
            </div>

            <div className="mt-8">
               <h3 className="text-xl font-bold">Continue Watching</h3>
               <div className="grid grid-cols-4 gap-4 mt-4">
                  <div>
                     <img
                        src="path_to_image.jpg"
                        alt="Movie Name"
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">Movie Name</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;