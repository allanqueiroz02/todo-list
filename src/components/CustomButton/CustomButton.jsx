import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 13px;
  opacity: 0.6;
  letter-spacing: 1.5px;
  font-weight: bold;

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

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  others: PropTypes.object,
};

export default CustomButton;
