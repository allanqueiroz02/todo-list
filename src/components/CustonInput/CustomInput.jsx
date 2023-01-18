import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 18px;
  border-radius: 4px;
`;

function CustomInput({ type = "text", value, onChange, placeholder }) {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default CustomInput;
