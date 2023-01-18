import styled from "styled-components";

const StyledButton = styled.button``;

function CustomButton({ children, onClick, disabled = false, title }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick} title={title}>
      {children}
    </StyledButton>
  );
}

export default CustomButton;
