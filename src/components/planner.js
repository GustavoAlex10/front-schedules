import React from "react";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const ContainerStatus = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90px;
`;

const CardPlanner = styled.div`
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

const Day = styled.button`
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

const Text = styled.h1`
    font-size: 12px;
`;

const Notifications = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Subscription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:300px;
    height: 50px;
    background-color: #E9E8F6;
    border-radius: 10px;
    border-width: 0px;
    margin: 2px 10px;  
    overflow: hidden;
    padding: 5px;
    &:hover,
    &:focus {
        background-color:#7C66F9;
    }
    &:active {
        color: orange;
      }
`;

const TextSubscription = styled.h1`  
    font-size: 10px;
`;

const TextHolderSubs = styled.h1`  
    font-size: 10px;
`;

const SubStatus = styled.img`
    width: 40px;
    height: 40px;
    background-color: orange;
    border-width: 0px;
    border-radius: 10px;
`;

const AreaTextNotifications = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    border-width: 0px;
`;

const Planner = () => {

    const days = 32;
    const daymap = []
    const notifay = []

    for (let i = 1; i < days; ++i) {
        daymap.push(i)
    }

    for (let i = 1; i < days; ++i) {
        notifay.push(i)
    }





    return (
        <>
            <Container>
                <CardPlanner>
                    {
                        daymap.map((a, i) => {
                            return (
                                <Day key={i}>
                                    <Text>{a}</Text>
                                </Day>
                            )
                        })
                    }
                </CardPlanner >
                <Notifications>
                    {
                        notifay.map((a, i) => {
                            return (
                                <Subscription key={i}>
                                    <AreaTextNotifications>
                                        <TextSubscription>
                                            Mark Hunter
                                        </TextSubscription>
                                        <TextHolderSubs>
                                            Mark Hunter
                                        </TextHolderSubs>
                                    </AreaTextNotifications>
                                    <ContainerStatus>
                                        <SubStatus />
                                    </ContainerStatus>
                                </Subscription>
                            )
                        })
                    }
                </Notifications>
            </Container >
        </>
    )
}

export default Planner;