import FormComponent from "./FormComponent";
import loginImage from "../assets/loginImage1.jpeg";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = () => {
  return (
    <div className='loginComponent'>
      <img className='loginImageClass' src={loginImage} alt='Login Image' />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className='formClass'>
          <div className='formHeadingClass'>
            <h2 style={{ fontSize: "35px" }}>Welcome Back Guys,</h2>
            <p>You can Login From here</p>
          </div>

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
              Login
            </button>
            <p style={{ width: "40%" }}>
              Not a Member yet?{" "}
              <span>
                <Link to={"/login"}>Click Here to Login</Link>
              </span>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
