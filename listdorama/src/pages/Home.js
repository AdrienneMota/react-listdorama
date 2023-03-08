import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { doramas } from "../doramasmocados";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [status, setStatus] = useState("seeing")
    const navigate = useNavigate()
    
    return(
        <>
            <Header/>
            <Doramas>
            {
                doramas.filter( d => d.status === status)
                    .map( d => 
                        <div className="dorama">
                        <img src={d.img} alt="dorama"/>
                        <div className="infos">
                        <p className="title">{d.name}</p>
                        <p className="genre">{d.genre}</p>
                        <div className="grade">
                            <ion-icon name="star-sharp"></ion-icon>
                            <h4>{d.grade}/5</h4>
                        </div>
                        </div>                        
                    </div>    
                    )
            }
            </Doramas>
            <Footer>
                <button onClick={ () => setStatus("seeing")}>Vendo</button>
                <button onClick={ () => setStatus("seen")}>Vistos</button>
                <button onClick={ () => setStatus("no_seen")}>Não vistos</button>
                <button onClick={ () => navigate("/dorama")}>Adicionar</button>
            </Footer>
        </>
    )
}

const Doramas = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    .dorama{
        width: 350px;
        margin-right: 1rem;
        margin-top: 1rem;
        display: flex;        
        padding: 10px;
        img{
        width: 103px; 
        height: 154px;
        }
        .infos{
            padding-left: 10px;
            display : flex ;
            flex-direction: column;
            justify-content: space-between;
            height: 100px;
            .title{
                font-size: 20px;
            }
            .genre  {
                font-size: 18px;
                color: gray;
            }
            .grade{
                display: flex;
                ion-icon{
                   margin-right: 7px;
                   color: #FFD700;
                }
                
            }
        }

    }
    
`
const Footer = styled.div`
        background-color: blue;
        display: flex;
        height: 3rem;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        button{
            background-color: #DB7093;
            width: 33%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border:1px solid #ffffff;
        }
`
   
