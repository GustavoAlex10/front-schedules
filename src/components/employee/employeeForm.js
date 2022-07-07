import styled from "styled-components";

export const Container = styled.div`
width:100vw;
height:100vh;
display: flex;
justify-content: center;
align-items:center;
box-sizing: border-box;
`;

export const Form = styled.form`
    width:360px;
    height:auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px 10px;   
    border-radius: 20px;
    box-shadow: 5px 5px 4px #aaaaaa;

    @media screen and (max-width: 560px) {
        width:300px;       
    }

    @media screen and (max-width: 415px) {
        width:300px;       
    }

    @media screen and (max-width: 375px) {
        width: 300px;    
    }   

    @media screen and (max-width: 360px) {
        width:270px;   
        
        padding: 0px;
    }

    @media screen and (max-width: 359px) {
        width:250px;   
        padding: 30px 0px 10px;

    }
        
`;

export const Group = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    @media screen and (max-width: 375px) {
    margin-top:10px;    
    }

    @media screen and (max-width: 360px) {        
    margin-top:10px;
    }
`;

export const Label = styled.div`
    padding: 10px 0px 0px 0px;
    font-size: 12px;
`;

export const Labels = styled.div`
    padding: 0px 50px;
    font-size: 12px;
    margin-top: 10px;

    @media screen and (max-width: 560px) {
        margin-top:10px;
        padding: 0px 30px;
        font-size: 12px;
        
    }

     @media screen and (max-width: 415px) {
        padding: 0px 40px;
        font-size: 12px;
    
    }

    @media screen and (max-width: 376px) {
        padding: 0px 70px;
        font-size: 12px;
    
    }   

    @media screen and (max-width: 361px) {
        padding: 5px 70px;
        font-size: 12px;  
         
    }
`;

export const Input = styled.input`
width: 230px;
height: 35px;
background-color:#E2E6EE;

margin: 0px 0px;

border-width: 0px;
border-radius: 5px;

padding: 0px 10px;
box-shadow: 1px 2px 5px #aaaaaa;

@media screen and (max-width: 360px) {
    padding: 0px 10px;    
    margin: 5px 0px;
}
`;

export const MiniInput = styled.input`
width: 110px;
height: 35px;

background-color:#E2E6EE;
border-width: 0px;
border-radius: 5px;

margin: 10px 5px 0px 5px;
padding: 0px 5px;
box-shadow: 1px 2px 5px #aaaaaa;

`;

export const Button = styled.button`

    width: 250px;
    height: 50px;

    background-color: #288FB4;
    border-width: 0px;
    border-radius: 5px;

    margin: 20px 0px 10px 0px; 
    cursor: pointer;
    color: #fff;
    font-size: 15px;

    box-shadow: 3px 3px 5px #aaaaaa;

    @media screen and (max-width: 560px) {   
        margin-top: 20px;       
    }

     @media screen and (max-width: 560px) {   
        margin-top: 20px;       
    }

    @media screen and (max-width: 414px) {   
        margin-top: 20px;       
    } 

`;

export const Warning = styled.h3`
    color: red;
    font-size: 10px;
`;

export const FieldRow = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
`;

export const Erro = styled.p`
padding:0px;
margin-top:-3px;
color: red;
font-size:12px;
`;

export const Erro2 = styled.p`
display: flex;
flex-direction: column;
color: red;
font-size:12px;
`;

export const Img = styled.img`
    width:70px;
    height:70px;
`;
