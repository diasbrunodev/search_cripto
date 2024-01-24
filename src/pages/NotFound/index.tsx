import { Link } from "react-router-dom"
import { Container } from "./styles"

export const NotFound = () => {
  return (
    <>
      <Container>
        <h1>Pagina 404 não existe</h1>
        <h3>Moeda não encontrada</h3>
        <p>Tente novamente ou busque por outra moeda</p>
        <Link to='/' className="link">
          Acessar cripto moedas
        </Link>
      </Container>
    </>
  )
}
