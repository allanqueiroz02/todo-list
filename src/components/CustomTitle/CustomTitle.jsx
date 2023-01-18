import styled from "styled-components";

const StyledTitle = styled.h1`
  border-bottom: 3px solid #f1f1f1;
`;

function CustomTitle({ text, title }) {
  return <StyledTitle title={title}>{text}</StyledTitle>;
}

export default CustomTitle;
