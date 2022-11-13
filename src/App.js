import Coin from './components/Coin';
// import Board from './components/Board';
import Navbar from './components/Navbar';
// import Popup from './components/Popup';
import Sidebar from './components/Sidebar';
import Doublecoin from './components/Doublecoin';
import DoubleDice from './components/DoubleDice';
import Theory from './components/Theory'
import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Dice from './components/Dice';

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
              <Route path="/" element={<><Coin/></>}></Route>
        </Routes>
        <Routes>
              <Route path="/Theory" element={<><Theory/></>}></Route>
        </Routes>
        <Routes>
              <Route path="/singledice" element={<><Dice/></>}></Route>
        </Routes>
        <Routes>
              <Route path="/doubledice" element={<><DoubleDice/></>}></Route>
        </Routes>
        <Routes>
              <Route path="/twocoin" element={<><Doublecoin/></>}></Route>
        </Routes>
      </BrowserRouter>
      <Sidebar/>
    </>
  );
}

export default App;
