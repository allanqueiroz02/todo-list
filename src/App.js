import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import "./globalStyle.css";
import {
  CustomButton,
  CustomInput,
  CustomList,
  CustomTitle,
} from "./components";

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

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

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

  useEffect(() => {
    if (list?.length) localStorage.setItem("listagem", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const listLocalStorage = JSON.parse(localStorage.getItem("listagem"));
    if (listLocalStorage) setList(listLocalStorage);
  }, []);

  return (
    <Container>
      <CustomTitle text="To-do list" title="um cabeçalho" />
      <ContainerContent>
        <CustomInput
          value={item}
          onChange={handleChange}
          onKeyDown={handleEvents}
          placeholder="Informe o item que deseja adicionar ao to-do"
        />
        <CustomButton onClick={handleEvents}>Adicionar</CustomButton>
      </ContainerContent>
      <CustomList list={list} />
    </Container>
  );
}

export default App;
