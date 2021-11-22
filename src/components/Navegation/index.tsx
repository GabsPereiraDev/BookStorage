import { Link } from "react-router-dom";
import { Container } from "./style";

export const Nav = () => {
  return (
    <Container>
      <ul>
        <Link to="/">Pagina Principal</Link>
        <Link to="/list">Lista de Livros</Link>
        <Link to="/register">Cadastro de livros</Link>
      </ul>
    </Container>
  );
};
