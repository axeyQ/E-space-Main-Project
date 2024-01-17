import PropTypes from "prop-types";

const FormComponent = ({
  ComponentLabel = "",
  ComponentType = "text",
  className = "componentInput",
  userState,
  setterState,
}) => {
  return (
    <div className='componentClass'>
      <label style={{ fontSize: "12px" }}>{ComponentLabel}</label>
      <input
        className={className}
        type={ComponentType}
        value={userState}
        onChange={setterState}
      />
    </div>
  );
};
FormComponent.propTypes = {
  ComponentLabel: PropTypes.string,
  ComponentType: PropTypes.string,
  className: PropTypes.string,
  userState: PropTypes.string,
  setterState: PropTypes.string,
};

export default FormComponent;
