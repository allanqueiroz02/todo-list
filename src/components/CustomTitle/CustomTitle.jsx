import styled from "styled-components";

const StyledTitle = styled.h1`
  border-bottom: 3px solid #f1f1f1;
`;

function CustomTitle({ text, title, ...others }) {
  return (
    <StyledTitle title={title} {...others}>
      {text}
    </StyledTitle>
  );
}

export default CustomTitle;
