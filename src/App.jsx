import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Test from "./Components/Test";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Home1 from "./Components/Home1";

const signInDatabase = [];
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='appClass'>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Home1 />} />

          <Route path='/login' element={<Login db={signInDatabase} />} />
          <Route path='/signup' element={<SignUp db={signInDatabase} />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
