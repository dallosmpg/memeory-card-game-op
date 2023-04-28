import './style//App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';

function App() {
  return (
      <div className='wrapper'>
        <Header />
        <Gameboard />
      </div>
    );
}

export default App;
