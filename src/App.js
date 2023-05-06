import './App.css';
import Home from './Components/Home';
import HomeSignin from './Components/HomeSignin';
import SignIn from './Components/SignIn';
import { Routes , Route } from 'react-router';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/homesignin' element={<HomeSignin/>}></Route>
        <Route path='*' element={<h1>404 Not Fount</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
