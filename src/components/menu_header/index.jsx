import { Container, Logo, Title } from "./style"
import logo from "../../assets/img/logo.png"


const MenuHeader = () => {
    return (
        <Container>
            <Logo src={logo} alt="logomarca"/>
            <Title>Menu</Title>
        </Container>
    )
}

export default MenuHeader