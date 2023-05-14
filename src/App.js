import './App.css';
import Home from './Components/pages/Home';
import SignIn from './Components/pages/SignIn';
import { Routes , Route } from 'react-router';
import store from "./app/store";
import Header from './Components/Header/Header';
import { useState } from 'react';

function App() {
  const {State} = store;

  const token = localStorage;
  token.accessToken || token.setItem("accessToken","");
  token.refreshToken || token.setItem("refreshToken","");
  token.isPage || token.setItem("isPage","home");

  const handleSetPage = (val) => {
    token.setItem("isPage",val);
  }

  return (
    <State.Provider value={{token,handleSetPage}}>
      <div className="App">
        <Routes>
          <Route path='project-1/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='*' element={<h1>404 Not Fount</h1>}/>
          </Route>
          <Route path='project-1/signin' element={<SignIn/>}/>
        </Routes>
      </div>
    </State.Provider>
  );
}

export default App;
