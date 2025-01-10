import React, { useState } from 'react';
import RightSideBar from './components/RightSideBar';
import LeftSideBar from './components/LeftSideBar';
import Home from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white z-50 md:hidden">
        <button
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
          className="text-gray-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={isLeftSidebarOpen ? faTimes : faBars} />
        </button>
        <h1 className="text-xl font-bold">Exxmon</h1>
        <button
          onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          className="text-gray-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={isRightSidebarOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Left Sidebar */}
      <div className={`fixed md:relative w-full md:w-1/4 bg-white z-40 transform ${isLeftSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out border-r h-full`}>
        <LeftSideBar />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/4 overflow-y-auto mt-16 md:mt-0">
        <Home />
      </div>

      {/* Right Sidebar */}
      <div className={`fixed md:relative right-0 w-full md:w-1/4 bg-white z-40 transform ${isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out border-l h-full`}>
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;