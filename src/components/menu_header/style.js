import styled from "styled-components"

import { THEME } from "../../global/theme"


export const Container = styled.header`
    width: 100%;
    border-top: 20px solid ${THEME.font.color.main};
    display: flex;
    flex-flow: column;
    align-items: center;
`

export const Logo = styled.img`
    width: 240px;
    margin: 15px;
`

export const Title = styled.h2`
    color: ${THEME.font.color.third};
    font-size: ${THEME.font.size.biggest};
    text-transform: uppercase;
    font-family: ${THEME.font.family.main};
`
