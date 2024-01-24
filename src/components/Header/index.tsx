import { Link } from "react-router-dom"

import { Container } from "./styles"

import logoImg from '../../assets/images/logo.svg'

export const Header = () => {
    return (
        <>
            <Container>
                <div>
                    <Link to='/'>
                        <img src={logoImg} alt="Logo Cripto" />
                    </Link>
                </div>
            </Container>
        </>
    )
}