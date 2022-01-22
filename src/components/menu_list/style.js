import styled from "styled-components";
import { THEME } from "../../global/theme"

export const Container = styled.section`
    width: 310px;
`

export const SectionName = styled.h3`
    font-family: ${THEME.font.family.main};
    letter-spacing: 2px;
    width: 100%;
    padding: 9px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: ${THEME.font.size.big};
    background-color: ${THEME.background.color.second};
    color: ${THEME.font.color.second};
    margin-bottom: 15px;
    margin-top: 20px;
`