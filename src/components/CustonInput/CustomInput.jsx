import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  width: 100%;
  padding: 18px;
  border-radius: 4px;
  border: none;
  border-left: 5px solid #9eb19a;
  :focus {
    outline: none;
    border-left: 5px solid #698264;
  }
`;

function CustomInput({
  type = "text",
  value,
  onChange,
  placeholder,
  ...others
}) {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...others}
    />
  );
}

CustomInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  others: PropTypes.object,
};

export default CustomInput;
