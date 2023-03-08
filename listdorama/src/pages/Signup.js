import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContentDefault, Title } from "../components/Content";
import { FormDefault, Input, Button } from "../components/Form";

export default function Signup(){
    return(
        <ContentDefault>
            <Logo>
                <Title>ListDorama</Title>
            </Logo>
            <FormDefault>
                <Input
                    placeholder="Nome de usuário"
                    type="text"
                />
                <Input
                    placeholder="Email"
                    type="email"
                />
                <Input
                    placeholder="Senha"
                    type="password"
                />
                <Input
                    placeholder="Confirmar senha"
                    type="password"
                />
                <Button>Cadastrar</Button>
            </FormDefault>
            <Link className="link" to="/">Já tem uma conta? Faça login!</Link>
        </ContentDefault>
    )
}

const Logo = styled.div`
    color: #C71585;    
    margin-bottom: 30px;
`