import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <Switch>
          <Route path="/chat/:person">
              <Header backButton="/chat"/>
              <ChatScreen />
          </Route>
          <Route path="/chat">
              <Header backButton="/"/>
              <Chats />
          </Route>
          <Route path="/">
              <Header/>
              <TinderCards />
              <SwipeButtons />
          </Route>
        </Switch>
      </Router>

      {/* Tinder Cards */}
      {/* Button below tinder cards */}
    
      {/* Chat Screen */}
      {/* Individual chat Screen */}
    </div>
  );
}

export default App;
