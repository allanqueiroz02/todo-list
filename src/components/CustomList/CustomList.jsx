import styled from "styled-components";

const StyledList = styled.ul`
  border: 1px solid #ffff00;
  padding: 20px;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ff00ff;
`;

function CustomList({ list }) {
  return (
    <StyledList>
      {list.map((item) => (
        <StyledListItem key={item}>{item}</StyledListItem>
      ))}
    </StyledList>
  );
}

export default CustomList;
