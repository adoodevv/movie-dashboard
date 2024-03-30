import React from 'react';

const RightSideBar: React.FC = () => {
   return (
      <div className="right-sidebar">
         <div className="search-bar flex items-center rounded-full bg-white mt-4 mb-8">
            <input type="text" placeholder="Search" className="pl-8 pr-4 py-2 rounded-full border border-gray-300" />
         </div>
         <div className="menu-header">
            <h2 className="text-lg font-bold">Popular Movies</h2>
            <ul>
               <li className="flex items-center py-2 px-4">Avengers</li>
               <li className="flex items-center py-2 px-4">Spiderman</li>
            </ul>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-2">See More</button>
         </div>
         <div className="social-header mt-8">
            <h2 className="text-lg font-bold">Favorites</h2>
            <ul>
               <li>Avengers</li>
               <li>Spiderman</li>
            </ul>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-2">See More</button>
         </div>
      </div>
   );
};

export default RightSideBar;