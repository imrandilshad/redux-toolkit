import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import UserList from './components/UserList';

function App() {
  const [isUserList, setIsUserList] = useState(false);
  const handleUserList = () => {
    setIsUserList(!isUserList);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter handleUserList={handleUserList} />
        {isUserList && <UserList />}
      </header>
    </div>
  );
}

export default App;
