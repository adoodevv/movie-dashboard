import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const RightSideBar: React.FC = () => {
   return (
      <div className="right-sidebar">
         <div className="search-bar flex items-center rounded-full bg-white mt-4 mb-8">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-4" />
            <input type="text" placeholder="Search" className="pl-8 w-full py-2 rounded-full border border-gray-300" />
         </div>
         <div className="menu-header">
            <h2 className="text-lg font-bold">Popular Movies</h2>
            <div className="grid grid-cols-1 gap-2 mt-4">
               <div className="flex items-center mb-2">
                     <img
                        src="path_to_image.jpg"
                        alt="avengers"
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">Avengers</p>
                  </div>
                  <div className="flex items-center mb-2">
                     <img
                        src="path_to_image.jpg"
                        alt="mad max"
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">Mad Max</p>
                  </div>
                  <div className="flex items-center mb-2">
                     <img
                        src="path_to_image.jpg"
                        alt="john wick 3"
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">John Wick 3</p>
                  </div>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-2">See More</button>
               </div>
         </div>
         <div className="social-header mt-8">
            <h2 className="text-lg font-bold">Favorites</h2>
            <div className="grid grid-cols-1 gap-4 mt-2">
               <div className="flex items-center mb-2">
                     <img
                        src="path_to_image.jpg"
                        alt="avengers"
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">Avengers</p>
                  </div>
                  <div className="flex items-center mb-2">
                     <img
                        src="path_to_image.jpg"
                        alt="mad max"
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">Mad Max</p>
                  </div>
                  <div className="flex items-center mb-2">
                     <img
                        src="path_to_image.jpg"
                        alt="john wick 3"
                        className="w-32 h-auto"
                     />
                     <p className="text-gray-600">John Wick 3</p>
                  </div>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-2">See More</button>
               </div>
            </div>
      </div>
   );
};

export default RightSideBar;