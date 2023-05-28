import './App.css';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';


function App() {
  const {count} = useSelector(state => state.counter)

  return (
      <div className="App">
        <h1 className='col-12 text-center mt-5'>Count {count}</h1>
        <Counter/>
      </div>
  );
}

export default App;
