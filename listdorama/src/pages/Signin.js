import { Link } from "react-router-dom";
import { ContentDefault, Title } from "../components/Content";
import { FormDefault, Input, Button } from "../components/Form";

export default function Signin(){
    return(
        <ContentDefault>
            <Title>ListDorama</Title>
            <FormDefault autoComplete="off">
                <Input
                    placeholder="Email"
                    type="emaill"
                />
                <Input
                    placeholder="Senha"
                    type="password"
                />
                <Button>Entrar</Button>
            </FormDefault>
            <Link className="link" to="/signup">Ainda não tem conta. Cadastre-se!</Link>
        </ContentDefault>
    )
}

