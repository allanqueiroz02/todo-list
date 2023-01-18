import styled from "styled-components";

import "./globalStyle.css";
import { CustomButton, CustomInput, CustomTitle } from "./components";

const Container = styled.div`
  max-width: 80%;
  padding: 10px;
  margin: 0px auto;
  /* border: 1px solid red; */
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
  return (
    <Container>
      <CustomTitle text="To-do list" title="um cabeçalho" />
      <ContainerContent>
        <CustomInput placeholder="Informe o item que deseja adicionar ao to-do" />
        <CustomButton>Adicionar</CustomButton>
      </ContainerContent>
    </Container>
  );
}

export default App;
