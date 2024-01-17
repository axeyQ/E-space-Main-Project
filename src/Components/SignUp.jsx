import FormComponent from "./FormComponent";
import loginImage from "../assets/loginImage1.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='loginComponent'>
      <img className='loginImageClass' src={loginImage} alt='Login Image' />
      <form className='formClass'>
        <div className='formHeadingClass'>
          <h2 style={{ fontSize: "35px" }}>Welcome Back Guys,</h2>
          <p>You can Login From here</p>
        </div>

        <FormComponent
          ComponentLabel='Email'
          ComponentType='email'
          userState={email}
          setterState={(e) => setEmail(e.target.value)}
        />

        <FormComponent
          ComponentLabel='Password'
          ComponentType='password'
          userState={password}
          setterState={(e) => setPassword(e.target.value)}
        />
        <div className='formFooterClass'>
          <button
            className='btn-primary'
            style={{ marginTop: "10px" }}
            type='submit'
          >
            Login
          </button>
          <p style={{ width: "40%" }}>
            Not a Member yet?{" "}
            <span>
              <Link to={"/login"}>Click Here to Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
