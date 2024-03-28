import React from 'react';
import RightSideBar from './components/RightSideBar';
import LeftSideBar from './components/LeftSideBar';

const App: React.FC = () => {
  return (
    <div>
      <LeftSideBar />
      <RightSideBar />
    </div>
  );
}

export default App;