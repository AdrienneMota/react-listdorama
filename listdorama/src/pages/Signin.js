import { Link } from "react-router-dom";
import { ContentDefault, Title } from "../components/Content";
import { FormDefault, Input, Button } from "../components/Form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function Signin(){
    const navigate = useNavigate()
    return(
        <ContentDefault>
            <Logo>
                <Title>ListDorama</Title>
            </Logo>
            <FormDefault autoComplete="off">
                <Input
                    placeholder="Email"
                    type="emaill"
                />
                <Input
                    placeholder="Senha"
                    type="password"
                />
                <Button onClick={ () => navigate("/home")}>Entrar</Button>
            </FormDefault>
            <Link className="link" to="/signup">Ainda não tem conta. Cadastre-se!</Link>
        </ContentDefault>
    )
}

const Logo = styled.div`
    color: #C71585;    
    margin-bottom: 30px;
`