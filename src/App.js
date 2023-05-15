import './App.css';
import Navbar from './components/Navbar';
import Payment from './components/Payment';

function App() {
  return (
    <div style={{ backgroundImage: "url('/bg.svg')" }} className='App'>
      <Navbar />
      <Payment />
    </div>
  );
}

export default App;
