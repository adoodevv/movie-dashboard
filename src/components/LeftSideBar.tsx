import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSearch, faHouse, faCalendarAlt, faUserFriends,
   faGlassCheers, faPhotoVideo, faCog, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const LeftSideBar: React.FC = () => {
   return (
      <div className="left-sidebar">
         <h1 className="text-2xl font-bold mt-4 mb-8 ml-4">Exxmon.</h1>
         <div className="menu-header mb-4">
            <h2 className="text-lg font-bold ml-4">Menu</h2>
            <ul>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faHouse} className="text-red-500 mr-2" />
                  <span className="font-light">Community</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faSearch} className="text-red-500 mr-2" />
                  <span className="font-light">Discovery</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-red-500 mr-2" />
                  <span className="font-light">Coming Soon</span>
               </li>
            </ul>
         </div>
         <div className="social-header mt-8">
            <h2 className="text-lg font-bold ml-4">Social</h2>
            <ul>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faUserFriends} className="text-red-500 mr-2" />
                  <span className="font-light">Friends</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faGlassCheers} className="text-red-500 mr-2" />
                  <span className="font-light">Parties</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faPhotoVideo} className="text-red-500 mr-2" />
                  <span className="font-light">Media</span>
               </li>
            </ul>
         </div>
         <div className="general-header mt-8">
            <h2 className="text-lg font-bold ml-4">General</h2>
            <ul>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faCog} className="text-red-500 mr-2" />
                  <span className="font-light">Settings</span>
               </li>
               <li className="flex items-center py-2 px-4">
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-red-500 mr-2" />
                  <span className="font-light">Logout</span>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default LeftSideBar;