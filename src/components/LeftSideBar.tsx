import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSearch, faHouse, faCalendarAlt, faUserFriends,
   faGlassCheers, faPhotoVideo, faCog, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const LeftSideBar: React.FC = () => {
   return (
      <div className="right-sidebar">
         <h1>Exxmon.</h1>
         <div className="menu-header"></div>
         <h2>Menu</h2>
         <ul>
            <li><FontAwesomeIcon icon={faHouse} /> Community</li>
            <li><FontAwesomeIcon icon={faSearch} /> Discovery</li>
            <li><FontAwesomeIcon icon={faCalendarAlt} /> Coming Soon</li>
         </ul>
         <div className="social-header">
            <h2>Social</h2>
            <ul>
               <li><FontAwesomeIcon icon={faUserFriends} /> Friends</li>
               <li><FontAwesomeIcon icon={faGlassCheers} /> Parties</li>
               <li><FontAwesomeIcon icon={faPhotoVideo} /> Media</li>
            </ul>
         </div>
         <div className="general-header">
            <h2>General</h2>
            <ul>
               <li><FontAwesomeIcon icon={faCog} /> Settings</li>
               <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
            </ul>
         </div>
      </div>
   );
};

export default LeftSideBar;