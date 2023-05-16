import './App.css';
import Home from './Components/pages/Home';
import SignIn from './Components/Main/SignIn';
import { Routes , Route } from 'react-router';
import Header from './Components/Header/Header';
import Profile from './Components/Main/Profile';

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path='project-1/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='*' element={<h1>404 Not Fount</h1>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='signin' element={<SignIn/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
