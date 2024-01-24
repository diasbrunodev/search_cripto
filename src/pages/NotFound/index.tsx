import { Link } from "react-router-dom"
import { Container } from "./styles"

export const NotFound = () => {
  return (
    <>
      <Container>
        <h1>Pagina 404 não existe</h1>
        <Link to='/' className="link">
          Acessar cripto moedas
        </Link>
      </Container>
    </>
  )
}
