import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div
      className='navbar'
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link to={"/"} className='navbar__logo'>
        e-Space
      </Link>
      <div className='navbar__links'>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>SignUp</Link>
        <Link to={"/test"}>Test</Link>
      </div>
    </div>
  );
};

export default Navbar;
