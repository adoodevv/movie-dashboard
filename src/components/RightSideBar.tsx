import React from 'react';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';

const RightSideBar: React.FC = () => {
   return (
      <div className="right-sidebar mx-4 md:mx-12 py-4">
         <div className="search-bar flex items-center rounded-full bg-white mt-2 md:mt-4 mb-4 md:mb-8">
            <input type="text" placeholder="Search" className="pl-4 md:pl-8 w-full py-1 md:py-2 rounded-full border border-gray-300 text-sm md:text-base" />
         </div>
         <PopularMovies />
         <TopRatedMovies />
      </div>
   );
};

export default RightSideBar;