import Coin from './components/Coin';
// import Board from './components/Board';
import Navbar from './components/Navbar';
// import Popup from './components/Popup';
import Sidebar from './components/Sidebar';
import Doublecoin from './components/Doublecoin';


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
              <Route path="/" element={<><Coin/></>}></Route>
        </Routes>
        <Routes>
              <Route path="/Level3" element={<><Coin/></>}></Route>
        </Routes>
        <Routes>
              <Route path="/Level4" element={<><Coin/></>}></Route>
        </Routes>
        <Routes>
              <Route path="/Level2" element={<><Doublecoin/></>}></Route>
        </Routes>
      </BrowserRouter>
      <Sidebar/>
    </>
  );
}

export default App;
