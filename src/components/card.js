import styled from "styled-components";



export const Card = styled.div`
width: 450px;
height: auto;
background: linear-gradient(90deg, rgba(82,182,254,1) 35%, rgba(97,84,254,1) 100%);
border-width: 0px;
border-radius:16px;
text-overflow: ellipsis;
box-shadow: 5px 5px 4px #aaaaaa;

@media screen and (max-width: 390px){
width: 300px;

}

`;


export const HeaderCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;    
    padding: 10px 25px;
    color: #fff;
    

@media screen and (max-width: 390px) {
      
    padding: 10px 5px;
    
}

`;

export const Text = styled.h1`

font-size: 15px;
font-weight: bold;
`;