import React from "react";
import { Container, ContainerStatus } from '../components/container';
import { Recomendations, RecomendationsText, SecondNavbar, SecondNavButton, SecondNavAction, ButtonAvancar, GroupButtons, ButtonRetro } from "../components/welcome";
import { Card, HeaderCard, Text } from '../components/card';
import { Notifications } from "../components/notifications";
import {
    Subscription, TextSubscription, SubStatus, TextHolderSubs,
    AreaTextNotifications
} from "../components/subscriptions";

const Dash = () => {

    const notifay = [];   

    for (let i = 1; i < 20; ++i) {
        notifay.push(i)
    }

    

    return (
        <>
            <Container>
                <SecondNavbar>
                    <SecondNavButton>Selecionar o dia</SecondNavButton>
                    <GroupButtons>
                        <ButtonRetro>r</ButtonRetro>                        
                        <SecondNavAction>Hoje</SecondNavAction>
                        <ButtonAvancar>a</ButtonAvancar>
                    </GroupButtons>

                </SecondNavbar>
                <Card>
                    <HeaderCard>
                        <Text>Solicitações de Agendamento</Text>
                        <Text>25</Text>
                    </HeaderCard>
                </Card>
                <Recomendations>
                    <RecomendationsText>QUARTA FEIRA 07/07/2022: </RecomendationsText>
                </Recomendations>
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
                                    <SubStatus>
                                        09h00
                                    </SubStatus>
                                    </ContainerStatus>
                                </Subscription>
                            )
                        })
                    }
                </Notifications>
            </Container>
        </>
    )
}

export default Dash;