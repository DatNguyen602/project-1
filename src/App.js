import './App.css';
import Home from './Components/pages/Home';
import SignIn from './Components/pages/SignIn';
import { Routes , Route } from 'react-router';
import Header from './Components/Header/Header';

function App() {
  const token = sessionStorage;
  token.accessToken || token.setItem("accessToken","");
  token.refreshToken || token.setItem("refreshToken","");

  return (
      <div className="App">
        <Routes>
          <Route path='project-1/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='*' element={<h1>404 Not Fount</h1>}/>
          </Route>
          <Route path='project-1/signin' element={<SignIn/>}/>
        </Routes>
      </div>
  );
}

export default App;
