import FormComponent from "./FormComponent";
import loginImage from "../assets/loginImage1.jpeg";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ db }) => {
  return (
    <div className='loginComponent'>
      <img className='loginImageClass' src={loginImage} alt='Login Image' />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          tel: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          var tenten = JSON.stringify(values, null, 2);
          db.push(tenten);
          console.log(db);
        }}
      >
        <Form className='formClass'>
          <div className='formHeadingClass'>
            <h2 style={{ fontSize: "35px" }}>Welcome Guys,</h2>
            <p>You can Sign Up from here</p>
          </div>
          <FormComponent ComponentLabel='First Name' name='firstName' />
          <FormComponent ComponentLabel='Last Name' name='lastName' />
          <FormComponent
            ComponentLabel='Contact Number'
            ComponentType='tel'
            name='tel'
          />

          <FormComponent
            ComponentLabel='Email'
            ComponentType='email'
            name='email'
          />
          <FormComponent
            ComponentLabel='Password'
            ComponentType='password'
            name='password'
          />
          <div className='formFooterClass'>
            <button
              className='btn-primary'
              style={{ marginTop: "10px" }}
              type='submit'
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
        </Form>
      </Formik>
    </div>
  );
};
Login.propTypes = {
  db: PropTypes.array,
};
export default Login;
