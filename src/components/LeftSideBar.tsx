import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSearch, faHouse, faStopwatch, faUserFriends, faCity,
   faGlassCheers, faPhotoVideo, faCog, faSignOutAlt, faFilm
} from '@fortawesome/free-solid-svg-icons';

const LeftSideBar: React.FC = () => {
   return (
      <div className=" container left-sidebar mx-12">
         <h1 className="text-2xl font-bold mt-4 mb-8">
            <FontAwesomeIcon icon={faFilm} className="text-red-500 mr-2 ml-4" />
            Exxmon.
         </h1>
         <div className="menu-header mb-4">
            <h2 className="font-bold text-gray-300 ml-4">MENU</h2>
            <ul>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faHouse} className="text-red-500 mr-2" />
                  <span className="text-gray-900">Home</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faCity} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Community</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Discovery</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faStopwatch} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Coming Soon</span>
               </li>
            </ul>
         </div>
         <div className="social-header mt-8">
            <h2 className="text-gray-300 font-bold ml-4">SOCIAL</h2>
            <ul>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faUserFriends} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Friends</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faGlassCheers} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Parties</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faPhotoVideo} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Media</span>
               </li>
            </ul>
         </div>
         <div className="general-header mt-8">
            <h2 className="text-gray-300 font-bold ml-4">GENERAL</h2>
            <ul>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faCog} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Settings</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Logout</span>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default LeftSideBar;