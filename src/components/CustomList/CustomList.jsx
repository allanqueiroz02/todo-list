import styled from "styled-components";
import deleteIcon from "../../assets/delete.png";
import { useCallback } from "react";

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

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  padding: 3px;
  background-color: #f1f1f1;
  border-radius: 50%;
  opacity: 0.8;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function CustomList({ list, setList }) {
  const handleDelete = useCallback(
    (indexItem) => {
      const updatedList = list.filter((_, index) => index !== indexItem);
      setList(updatedList);
    },
    [list, setList]
  );

  return (
    <StyledList>
      {list.map((item, index) => (
        <div
          style={{ display: "flex", alignItems: "center" }}
          key={`${item}${Math.random() * 50}`}
        >
          <StyledListItem style={{ width: "98%" }}>{item}</StyledListItem>
          <StyledImg
            src={deleteIcon}
            alt="delete icon"
            title={`Clique aqui para remover ${list[index]} da listagem`}
            onClick={() => handleDelete(index)}
          />
        </div>
      ))}
    </StyledList>
  );
}

export default CustomList;
