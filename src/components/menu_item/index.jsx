import { ItemList } from "./style"


const MenuItem = ({ name, price }) => {
    return (
        <ItemList>
            <p>{name}</p>
            <p>{Number(price).toFixed(2)}</p>
        </ItemList>
    )
}

export default MenuItem