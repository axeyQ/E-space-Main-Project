import { Field, Form, Formik } from "formik";

const Test = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", phone: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label>Name: </label>
          <Field name='name' type='text' />
          <br />
          <br />
          <label>Phone Number: </label>
          <Field name='phone' type='tel' />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Test;
