import styled from "styled-components"

export default function Header(){
    return(
        <HeaderDefault>
            ListDorama
        </HeaderDefault>
    )
}

const HeaderDefault = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
    color: black;
` 