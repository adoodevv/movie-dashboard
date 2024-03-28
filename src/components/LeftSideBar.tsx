import React from 'react';

const LeftSideBar: React.FC = () => {
   return (
      <div className="right-sidebar">
         <h1>Exxmon.</h1>
         <div className="menu-header">
            <h2>Menu</h2>
            <ul>
               <li>Community</li>
               <li>Discovery</li>
               <li>Coming Soon</li>
            </ul>
         </div>
         <div className="social-header">
            <h2>Social</h2>
            <ul>
               <li>Friends</li>
               <li>Parties</li>
               <li>Media</li>
            </ul>
         </div>
         <div className="general-header">
            <h2>General</h2>
            <ul>
               <li>Settings</li>
               <li>Logout</li>
            </ul>
         </div>
      </div>
   );
};

export default LeftSideBar;