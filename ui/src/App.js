import React, { Component } from 'react';
import PostViewer from './PostViewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <PostViewer />
        </main>
      </div>
    );
  }
}

export default App;
