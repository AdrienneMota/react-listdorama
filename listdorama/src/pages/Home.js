import styled from "styled-components";
import Header from "../components/Header";

export default function Home(){
    return(
        <>
            <Header/>
            <Doramas>
                <div className="dorama">
                    <img src="https://bancodeseries.com.br/images/posters/14661.jpg" alt="dorama"/>
                    <div className="infos">
                    <p className="title">What's Wrong With Secretary Kim</p>
                    <p className="genre">Comédia Romântica</p>
                    <div className="grade">
                        <ion-icon name="star-sharp"></ion-icon>
                        <h4>5/5</h4>
                    </div>
                    </div>                        
                </div>
                <div className="dorama">
                    <img src="https://bancodeseries.com.br/images/posters/14661.jpg" alt="dorama"/>
                    <div className="infos">
                    <p className="title">What's Wrong With Secretary Kim</p>
                    <p className="genre">Comédia Romântica</p>
                    <div className="grade">
                        <ion-icon name="star-sharp"></ion-icon>
                        <h4>5/5</h4>
                    </div>
                    </div>                        
                </div>
                <div className="dorama">
                    <img src="https://bancodeseries.com.br/images/posters/14661.jpg" alt="dorama"/>
                    <div className="infos">
                    <p className="title">What's Wrong With Secretary Kim</p>
                    <p className="genre">Comédia Romântica</p>
                    <div className="grade">
                        <ion-icon name="star-sharp"></ion-icon>
                        <h4>5/5</h4>
                    </div>
                    </div>                        
                </div>
            </Doramas>
            <Footer>
                <button>Em andamento</button>
                <button>Vistos</button>
                <button>Não vistos</button>
            </Footer>
        </>
    )
}

const Doramas = styled.div`
    /* background-color: ; */
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .dorama{
        width: 350px;
        margin-right: 1rem;
        margin-top: 1rem;
        display: flex;
        /* background-color: yellow; */
        padding: 10px;
        img{
        width: 103px; 
        height: 154px;
        }
        .infos{
            /* background-color: purple; */
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
                   color: yellow;
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
    
    
