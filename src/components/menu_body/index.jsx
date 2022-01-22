import { db } from "../../mock/db"
import MenuList from "../menu_list"

import { Container } from "./style"


export const MenuBody = () => {
    return (
        <Container>
            {db.map((s, _) => <MenuList sectionName={s.section} products={s.products} key={_}/>)}
        </Container>
    )
}

export default MenuBody