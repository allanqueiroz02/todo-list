import { useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import undoIcon from "../../assets/undo.png";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 20px;
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

function CustomDoneList({ doneList, setDoneList, setList }) {
  const handleReturnItem = useCallback(
    (indexItem) => {
      const removeFromDoneList = doneList.filter(
        (_, index) => index !== indexItem
      );
      setDoneList(removeFromDoneList);

      const addToList = doneList.filter((_, index) => index === indexItem);
      setList((oldV) => [...oldV, ...addToList]);
    },
    [doneList, setDoneList, setList]
  );
  return (
    <StyledList>
      {doneList.map((itemList, indexItem) => (
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
            src={undoIcon}
            alt="undo icon"
            title={`Mover ${doneList[indexItem]} para cima`}
            onClick={() => handleReturnItem(indexItem)}
          />
        </div>
      ))}
    </StyledList>
  );
}

CustomDoneList.propTypes = {
  doneList: PropTypes.array,
  setDoneList: PropTypes.func,
  setList: PropTypes.func,
};

export default CustomDoneList;
