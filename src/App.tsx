import React from 'react';
import RightSideBar from './components/RightSideBar';
import LeftSideBar from './components/LeftSideBar';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 border-r">
        <LeftSideBar />
      </div>
      <div className="w-full md:w-2/4">
        <Home />
      </div>
      <div className="w-full md:w-1/4 border-l">
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;