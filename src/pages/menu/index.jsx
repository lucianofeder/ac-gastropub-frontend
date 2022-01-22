
import { Container } from "./style"

import MenuBody from "../../components/menu_body"
import MenuHeader from "../../components/menu_header"


const Menu = () => {
    return (
        <Container>
            <MenuHeader />
            <MenuBody />
        </Container>
    )
}

export default Menu