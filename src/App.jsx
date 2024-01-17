import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Test from "./Components/Test";

const signInDatabase = [];
function App() {
  return (
    <div className='appClass'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/login' element={<Login db={signInDatabase} />} />
          <Route path='/signup' element={<SignUp db={signInDatabase} />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
