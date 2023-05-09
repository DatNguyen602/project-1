import './App.css';
// import { Routes , Route } from 'react-router';
import Parent from './Components/Parent';
// import Child2 from './Components/Child2';
import store from "./app/store"
import staticData from "./Components/mock.json"

function App() {
  const {UserContext} = store;

  return (
    <UserContext.Provider value={staticData}>
      <div className="App">
        <Parent/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
