    import styled from "styled-components";
    
    
    export const ContainerRecomendations = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        width: 350px;
        height: 100px;

        
        overflow: hidden;
        border-radius: 10px;

        background-color: green;

    `;

    export const CardRecomendations = styled.div`
        width: 100px;
        height: 80px;

        margin-top: 10px;
        margin-left: 12px;
        margin-bottom: 10px;

        background-color: #E2E6EE;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
    `;

    export const TextRecomendations = styled.h2`
        font-size: 15px;
    `;