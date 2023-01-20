import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 18px;
  border-radius: 4px;
  border: none;
  border-left: 5px solid #698264;
  :focus {
    outline: none;
    border-left: 5px solid #000000;
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

export default CustomInput;
