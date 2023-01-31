import { useCallback } from "react";
import styled from "styled-components";
import deleteIcon from "../../assets/delete.png";
import doneIcon from "../../assets/done.png";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 20px;
  /* border: 1px solid #ffff00; */
`;

const StyledListItem = styled.li`
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
  border: none;
  border-bottom: 3px solid #f1f1f1;
  border-left: 3px solid #f1f1f1;
  :hover {
    background-color: #cfcfcf;
  }
`;

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  padding: 3px;
  margin: 3px;
  background-color: #e9e6e6;
  border-radius: 50%;
  opacity: 0.6;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function CustomList({ list, setList, setDoneList }) {
  const handleDelete = useCallback(
    (indexItem) => {
      const updatedList = list.filter((_, index) => index !== indexItem);
      setList(updatedList);
      if (!updatedList?.length)
        localStorage.setItem("listagem", JSON.stringify([]));
    },
    [list, setList]
  );

  const handleDoneClick = useCallback(
    (indexItem) => {
      const addToDoneList = list.filter((_, index) => index === indexItem);
      setDoneList((oldV) => [...oldV, addToDoneList]);

      const removeFromList = list.filter((_, index) => index !== indexItem);
      setList(removeFromList);

      if (!removeFromList?.length)
        localStorage.setItem("listagem", JSON.stringify([]));
    },
    [list, setDoneList, setList]
  );

  return (
    <StyledList>
      {list.map((itemList, indexItem) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          key={`${itemList}${Math.random() * 50}`}
        >
          <StyledListItem style={{ width: "90%" }}>{itemList}</StyledListItem>
          <StyledImg
            src={deleteIcon}
            alt="delete icon"
            title={`Remover ${list[indexItem]} da listagem`}
            onClick={() => handleDelete(indexItem)}
          />
          <StyledImg
            src={doneIcon}
            alt="done icon"
            title={`Marcar como feito`}
            onClick={() => handleDoneClick(indexItem)}
          />
        </div>
      ))}
    </StyledList>
  );
}

export default CustomList;
