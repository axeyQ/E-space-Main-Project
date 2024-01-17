import FormComponent from "./FormComponent";
import loginImage from "../assets/loginImage1.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function clickHandler() {
    console.log(firstName, lastName, tel, email, password);
  }
  return (
    <div className='loginComponent'>
      <img className='loginImageClass' src={loginImage} alt='Login Image' />
      <form className='formClass'>
        <div className='formHeadingClass'>
          <h2 style={{ fontSize: "35px" }}>Welcome Guys,</h2>
          <p>You can Sign Up from here</p>
        </div>
        <FormComponent
          ComponentLabel='First Name'
          userState={firstName}
          setterState={(e) => setFirstName(e.target.value)}
        />
        <FormComponent
          ComponentLabel='Last Name'
          userState={lastName}
          setterState={(e) => setLastName(e.target.value)}
        />
        <FormComponent
          ComponentLabel='Contact Number'
          ComponentType='tel'
          userState={tel}
          setterState={(e) => setTel(e.target.value)}
        />

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
            onClick={() => clickHandler}
          >
            Sign Up for Free
          </button>
          <p>
            Already a Member?{" "}
            <span>
              <Link to='/signup'>Click Here to Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
