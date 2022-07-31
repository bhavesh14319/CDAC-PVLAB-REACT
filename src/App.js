import Coin from './components/Coin';
// import Board from './components/Board';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

function App() {



  return (
    <>
      {/* <Popup></Popup> */}
      {/* <Navbar></Navbar>
      <Coin></Coin> */}
      {/* <Board></Board> */}
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Coin></Coin>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
