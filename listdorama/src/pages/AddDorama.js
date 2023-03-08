import styled from "styled-components";
import { FormDefault, Button, Input} from "../components/Form";
import Header from "../components/Header";

export default function AddDorama(){
    return(
        <>
            <Header/>
            <FormDefault autoComplete="off">
                <Input
                    placeholder="Título"
                    type="text" 
                />
                <Input
                    placeholder="Gênero"
                    type="text"
                />
                <select name="cidades">
                    <option value="">Status</option> 
                    <option value="status">Vendo</option> 
                    <option value="status">Visto</option> 
                    <option value="status">Não visto</option> 
                </select>
                <Button>Salvar</Button>
            </FormDefault>
        </>
    )
}


