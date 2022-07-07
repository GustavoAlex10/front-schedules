import styled from "styled-components";


export const ContainerPayment = styled.div`
    width: 100vw;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 120px;
    grid-gap: 0px;
    margin-top: 50px;  
`;

export const CardPayment = styled.div`
    width: 150px;   
    height: 100px;
    background-color: #E9E8F6;
    border-radius: 5px;
    border-width: 0px;
    margin: 20px 15px;  
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover,
    &:focus {
    background-color:#7C66F9;
    }
    &:active {
    color: orange;
    }
`;


export const HeaderCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0px;
    padding: 10px 0px 10px 0px;
    color: black;
    background-color: #82CCDD;
    border-radius: 150px 70px 0px 150px;
`;

export const FooterCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    padding: 21px 5px;
    text-overflow: ellipsis;
    border-radius: - 150px 0px 0px 0px;
`;

export const PhotoUser = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 100%;
`;

export const Text = styled.h1`
    font-size: 10px;
    color: white;
`;
