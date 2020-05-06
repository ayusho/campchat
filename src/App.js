import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import Editor from './components/Editor';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div className="App">
          <Editor className='editor'/>
          <Chat className='chat'/>
      
    </div>
  );
}

export default App;
