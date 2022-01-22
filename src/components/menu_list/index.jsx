import { Container, SectionName } from "./style"

import MenuItem from "../menu_item" 

const MenuList = ({ sectionName, products }) => {
    return (
        <Container>
            <SectionName>{ sectionName }</SectionName>
            {products.map((p, _) => <MenuItem name={p.name} price={p.price} key={_}/>)}
        </Container>
    )
}

export default MenuList