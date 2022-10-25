
import "./home.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

const Home = () => {
  return (
    <Container className="container">
      <Box className="container2">
        <TextField
          id="inp-descrip"
          label="Descrição"
          variant="outlined"
          sx={{ width: "89%", marginRight: 1 }}
        />
        <TextField
          id="inp-prio"
          label="Prioridade"
          variant="outlined"
          type="number"
          sx={{width: '10%'}}
        />
      </Box>
      <Button variant="contained" fullWidth={true} sx={{marginTop: '1rem'}}>
        Adicionar
      </Button>
    </Container>
  );
};

export default Home;
