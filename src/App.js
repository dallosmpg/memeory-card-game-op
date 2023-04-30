import './style//App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

function App() {
  return (
      <div className='wrapper'>
        <Header />
        <Gameboard />
        <Footer />
      </div>
    );
}

export default App;
