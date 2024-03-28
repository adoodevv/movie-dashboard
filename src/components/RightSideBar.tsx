import React from 'react';

const RightSideBar: React.FC = () => {
   return (
      <div className="right-sidebar">
         <div className="search-bar">
            <input type="text" placeholder="Search movies" />
            <button>Search</button>
         </div>
         <div className="menu-header">
            <h2>Popular Movies</h2>
            <ul>
               <li>Avengers</li>
               <li>Spiderman</li>
            </ul>
            <button>See More</button>
         </div>
         <div className="social-header">
            <h2>Favorites</h2>
            <ul>
               <li>Avengers</li>
               <li>Spiderman</li>
            </ul>
            <button>See More</button>
         </div>
      </div>
   );
};

export default RightSideBar;