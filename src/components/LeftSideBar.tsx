import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHouse, faStopwatch, faUserFriends, faCity,
   faGlassCheers, faPhotoVideo, faCog, faSignOutAlt, faFilm } from '@fortawesome/free-solid-svg-icons';

const LeftSideBar: React.FC = () => {
   return (
      <div className="left-sidebar ml-12">
         <div className="flex items-center text-xl font-bold mt-4 mb-8">
            <h1 className="">
               <FontAwesomeIcon icon={faFilm} className="text-red-500 mr-2 ml-4" />
               Exxmon
            </h1>
            <h1 className="text-red-500">.</h1>
         </div>
         
         <div className="menu-header mb-4">
            <h2 className="font-bold text-gray-300 ml-4 text-sm">MENU</h2>
            <ul>
               <li className="flex items-center py-3 px-4 relative">
                  <FontAwesomeIcon icon={faHouse} className="text-red-500 mr-2" />
                  <span className="text-gray-900 text-sm">Home</span>
                  <div className="absolute right-0 top-0 bottom-0 w-1 h-8 bg-red-500"></div>
               </li>
               <li className="flex items-center py-3 px-4">
                  <FontAwesomeIcon icon={faCity} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Community</span>
               </li>
               <li className="flex items-center py-3 px-4">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Discovery</span>
               </li>
               <li className="flex items-center py-3 px-4">
                  <FontAwesomeIcon icon={faStopwatch} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Coming Soon</span>
               </li>
            </ul>
         </div>
         <div className="social-header mt-8">
            <h2 className="text-gray-300 font-bold text-sm ml-4">SOCIAL</h2>
            <ul>
               <li className="flex items-center py-3 px-4">
                  <FontAwesomeIcon icon={faUserFriends} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Friends</span>
               </li>
               <li className="flex items-center py-3 px-4">
                  <FontAwesomeIcon icon={faGlassCheers} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Parties</span>
               </li>
               <li className="flex items-center py-3 px-4">
                  <FontAwesomeIcon icon={faPhotoVideo} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Media</span>
               </li>
            </ul>
         </div>
         <div className="general-header mt-8">
            <h2 className="text-gray-300 font-bold text-sm ml-4">GENERAL</h2>
            <ul>
               <li className="flex items-center py-3 px-4">
                  <FontAwesomeIcon icon={faCog} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Settings</span>
               </li>
               <li className="flex items-center py-3 px-4">
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Logout</span>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default LeftSideBar;