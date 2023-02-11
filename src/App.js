import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import "./globalStyle.css";
import {
  CustomButton,
  CustomDoneList,
  CustomInput,
  CustomList,
  CustomTitle,
} from "./components";

import clearIcon from "./assets/clear.png";

const Container = styled.div`
  max-width: 80%;
  padding: 10px;
  margin: 0px auto;
  background-color: #698264;
  border-radius: 0 15px 15px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledClearIcon = styled.img`
  width: 25px;
  height: 25px;
  padding: 3px;
  margin: 3px;
  background-color: #f1f1f1;
  border-radius: 50%;
  opacity: 0.8;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handleChange = useCallback((e) => setItem(e.target.value), [setItem]);

  const updateList = useCallback(() => {
    setList((oldValue) => [...oldValue, item]);
    setItem("");
  }, [item]);

  const handleEvents = useCallback(
    (e) => {
      if (e.key === "Enter" || e.type === "click") updateList();
    },
    [updateList]
  );

  const handleClear = () => {
    localStorage.setItem("listagem", JSON.stringify([]));
    setList([]);
  };

  useEffect(() => {
    if (list?.length) localStorage.setItem("listagem", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const listLocalStorage = JSON.parse(localStorage.getItem("listagem"));
    if (listLocalStorage) setList(listLocalStorage);
  }, [setList]);

  useEffect(() => {
    if (doneList?.length)
      localStorage.setItem("listagemConcluida", JSON.stringify(doneList));
  }, [doneList]);

  useEffect(() => {
    const doneListLocalStorage = JSON.parse(
      localStorage.getItem("listagemConcluida")
    );
    if (doneListLocalStorage) setDoneList(doneListLocalStorage);
  }, [setDoneList]);

  return (
    <Container>
      <Box>
        <CustomTitle text="To-do list" title="um cabeçalho" />
        <StyledClearIcon
          src={clearIcon}
          alt="delete icon"
          title={`Limpar listagem`}
          onClick={handleClear}
        />
      </Box>

      <ContainerContent>
        <CustomInput
          value={item}
          onChange={handleChange}
          onKeyDown={handleEvents}
          placeholder="Informe o item que deseja adicionar ao to-do"
        />
        <CustomButton onClick={handleEvents}>Adicionar</CustomButton>
      </ContainerContent>
      <CustomTitle text="Para fazer" title="itens para finalizar" as="h3" />
      {list.length ? (
        <CustomList list={list} setList={setList} setDoneList={setDoneList} />
      ) : (
        <h4>Não há itens na lista</h4>
      )}
      <CustomTitle text="Concluídos" title="itens finalizados" as="h3" />
      {doneList.length ? (
        <CustomDoneList
          doneList={doneList}
          setDoneList={setDoneList}
          setList={setList}
        />
      ) : (
        <h4>Não há itens Concluídos</h4>
      )}
    </Container>
  );
}

export default App;
