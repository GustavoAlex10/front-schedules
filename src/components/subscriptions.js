import styled from "styled-components";

export const Subscription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:50vw;
    height: 100px;
    background-color: #E9E8F6;
    border-radius: 10px;
    border-width: 0px;
    margin: 2px 10px;  
    overflow: hidden;
    padding: 5px;
    &:hover,
    &:focus {
    background-color:#FF844B;
    }
    &:active {
    color: orange;
  }


    @media screen and (max-width: 390px){
    width: 350px;
    height: 50px;
    }

`;

export const Text = styled.h1`
    font-size: 12px;
`;


export const TextSubscription = styled.h1`  
 @media screen and (max-width: 390px){
    font-size: 10px;
    }
    font-size: 15px;
`;

export const TextHolderSubs = styled.h1`
 @media screen and (max-width: 390px){
    font-size: 10px
    }  
    font-size: 15px;
`;

export const SubStatus = styled.div`
    width: 70px;
    height: 40px;
    background-color: #0A0D25;
    color: #fff;
    font-weight: bold;
    border-width: 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const AreaTextNotifications = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    border-width: 0px;
`;