import styled from "styled-components"
import { THEME } from "../../global/theme"

export const ItemList = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: ${THEME.font.size.medium};
    color: ${THEME.font.color.main};
    width: 100%;
    text-transform: uppercase;
    font-family: ${THEME.font.family.main};
    margin: 5px 0;
`

