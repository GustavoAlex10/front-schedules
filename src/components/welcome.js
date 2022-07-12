import styled from "styled-components";

export const SecondNavbar = styled.div`

width: 50vw;
height: auto;
padding: 30px 0px 0px 0px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0px 0px 20px 0px;




@media screen and (max-width: 390px) {
width: 90vw;
padding: 10px 0px 0px 0px;
margin: 0px 0px 50px 0px;
}

`;

export const SecondNavButton = styled.button`

        width: 300px;
        height: 90px;
        background-color: #000;
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-width: 0px;
        border-radius: 5px;
        

@media screen and (max-width: 390px){
        width: 150px;
        height: 50px;      
}
`;

export const SecondNavAction = styled.button`
        width: 290px;
        height: 90px;
        background-color: #000;
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-width: 0px;


@media screen and (max-width: 390px) {
        width: 110px;
        height: 50px;
}
      
        
`;

export const GroupButtons = styled.button`
     display: flex;
        flex-direction: row;
        border-width: 0px;
       
    `;


export const ButtonAvancar = styled.button`

        width: 30px;
        height: 90px;
        border-width: 0px;
        border-radius: 0px 5px 5px 0px;
        background-color: #000;
        color: #fff;

        @media screen and (max-width: 390px) {
        height: 50px;
}


        
    `;


export const ButtonRetro = styled.button`
        width: 30px;
        height: 90px;
        border-width: 0px;
        border-radius: 5px 0px 0px 5px;
        background-color: #000;
        color: #fff;

        @media screen and (max-width: 390px) {
        height: 50px;
}


        
`;

export const Recomendations = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 5px;
    overflow: hidden;



`;

export const RecomendationsText = styled.div`
    margin-top: 20px;
    font-weight: bold; 
    margin-bottom: 10px;


`;


