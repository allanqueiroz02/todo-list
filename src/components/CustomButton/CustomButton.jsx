import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 13px;
  opacity: 0.7;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

function CustomButton({
  children,
  onClick,
  disabled = false,
  title,
  ...others
}) {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      title={title}
      {...others}
    >
      {children}
    </StyledButton>
  );
}

export default CustomButton;
