import styled from "styled-components";
import PropTypes from "prop-types";

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

CustomTitle.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  others: PropTypes.object,
};

export default CustomTitle;
