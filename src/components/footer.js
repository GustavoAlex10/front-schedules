import styled from "styled-components";

    export const Footer = styled.div`
        width: 100%;        
        background-color: transparent;       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        margin-top:0px;
        z-index:10;
        position: relative;
        
    `;
    
    export const ContainerItems = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    export const Items = styled.div`
        width: 50px;
        height: 50px;
        background-color: gray;      
        border-radius: 50px;
        margin: 10px;
    `;

