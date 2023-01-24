import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: "😎";
  padding: 20px;
  border: 1px solid #ffff00;
`;

const StyledListItem = styled.li`
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid #ff00ff;
  :hover {
    background-color: #cfcfcf;
  }
`;

function CustomList({ list }) {
  return (
    <StyledList>
      {list.map((item) => (
        <StyledListItem key={`${item}${Math.random() * 50}`}>
          {item}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default CustomList;
