import React from 'react';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';

const RightSideBar: React.FC = () => {
   return (
      <div className="right-sidebar mx-12">
         <div className="search-bar flex items-center rounded-full bg-white mt-4 mb-8">
            <input type="text" placeholder="Search" className="pl-8 w-full py-1 rounded-full border border-gray-300" />
         </div>
         <PopularMovies/>
         <TopRatedMovies/>
      </div>
   );
};

export default RightSideBar;