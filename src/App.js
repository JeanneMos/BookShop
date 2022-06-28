import React from 'react';
import './App.scss';
import Routes from './Router/Routes';
import {BooksProvider} from './Context/bookContext';

function App() {
  return (
    <BooksProvider>
      <div className="App">
        <Routes />
      </div>
    </BooksProvider>
  );
}

export default App;
