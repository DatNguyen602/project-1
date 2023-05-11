import './App.css';
import Home from './Components/Home';
import HomeSignin from './Components/HomeSignin';
import SignIn from './Components/SignIn';
import { Routes , Route } from 'react-router';
import store from "./app/store"

function App() {
  const {UserContext} = store;

  return (
    <UserContext.Provider value="">
      <div className="App">
        <Routes>
          <Route path='project-1/' element={<Home/>}></Route>
          <Route path='project-1/signin' element={<SignIn/>}></Route>
          <Route path='project-1/homesignin' element={<HomeSignin/>}></Route>
          <Route path='*' element={<h1>404 Not Fount</h1>}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
