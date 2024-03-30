import React from 'react';
import RightSideBar from './components/RightSideBar';
import LeftSideBar from './components/LeftSideBar';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <LeftSideBar />
      </div>
      <div className="w-1/2">
        <Home />
      </div>
      <div className="w-1/4">
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;