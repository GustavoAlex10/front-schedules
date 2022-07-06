import styled from "styled-components";

export const CardPlanner = styled.div`
    width: 300px;
    height: 250px;
    margin: 10px;
    background-color: #E2E6EE;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border-width: 0px;
    border-radius: 10px;
`;

export const Day = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #7C66F9;   
    border-width: 0px; 
    border-radius: 10px;
    &:hover,
    &:focus {
        background-color:orange;
    }
    &:active {
        color: blue;
      }
`;