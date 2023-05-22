import './App.css';
import { Routes , Route } from 'react-router';
import store from "./app/store"

function App() {
  const {UserContext} = store;

  return (
    <UserContext.Provider value={{}}>
      <div className="App">
        <Routes>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
