import { Field } from "formik";
import PropTypes from "prop-types";

const FormComponent = ({
  ComponentLabel = "",
  ComponentType = "text",
  className = "componentInput",
  name,
  // userState,
  // setterState,
}) => {
  return (
    <div className='componentClass'>
      <label style={{ fontSize: "12px" }}>{ComponentLabel}</label>
      <Field
        className={className}
        type={ComponentType}
        name={name}
        // name={userState}
        // onChange={setterState}
      />
    </div>
  );
};
FormComponent.propTypes = {
  ComponentLabel: PropTypes.string,
  ComponentType: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  // userState: PropTypes.string,
  // setterState: PropTypes.string,
};

export default FormComponent;
