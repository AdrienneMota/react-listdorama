import styled from "styled-components"
import { Title } from "../components/Content"

export default function Header(){
    return(
        <ContentHearder>
            <div className="logo">
                <Title>ListDorama</Title>
            </div>
        </ContentHearder>
    )
}

const ContentHearder = styled.header`
    width: 100%;
    height: 8rem;
    background-color: #C71585;
    box-shadow: 0px 4px 9px grey;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo{
        width: 100%;
        height: 7rem;
        /* background-color: yellow; */
        display: flex;
        align-items: center;
        justify-content: center;
    }    
`

