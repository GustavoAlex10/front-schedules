import React from "react";
import { Container } from '../components/container';
import { Recomendations, RecomendationsText, Welcome, WelcomeText, WelcomeTextName } from "../components/welcome";
import { Card, HeaderCard, Text } from '../components/card';
import { ContainerRecomendations, CardRecomendations, TextRecomendations } from '../components/cardRecomendations';
import { Footer, Items, ContainerItems } from '../components/footer';

const Dash = () => {

    const history = [];

    for (let i = 1; i < 4; ++i) {
        history.push(i)
    }

    return (
        <>
            <Container>
                <Welcome>
                    <WelcomeText>Good Morning!</WelcomeText>
                    <WelcomeTextName>Gustavo</WelcomeTextName>
                </Welcome>
                <Card>
                    <HeaderCard>
                        <Text>OnGoing : </Text>
                        <Text>UpComing : </Text>
                    </HeaderCard>
                </Card>
                <Recomendations>
                    <RecomendationsText>Recommendations: </RecomendationsText>
                </Recomendations>
                <ContainerRecomendations>
                    {
                        history.map((a, i) => {
                            return (
                                <CardRecomendations key={i}>
                                    <TextRecomendations>Recomenda</TextRecomendations>
                                </CardRecomendations>
                            )
                        })
                    }
                </ContainerRecomendations>
                <Recomendations>
                    <RecomendationsText>Quick Access: </RecomendationsText>
                </Recomendations>
                <ContainerRecomendations>
                    {
                        history.map((a, i) => {
                            return (
                                <CardRecomendations key={i}>
                                    <TextRecomendations>Quick</TextRecomendations>
                                </CardRecomendations>
                            )
                        })
                    }
                </ContainerRecomendations>
            </Container>
            <Footer>
                <ContainerItems >
                    {
                        history.map((a, i) => {
                            return (
                                <Items key={i}/>
                            )
                        })
                    }
                </ContainerItems>
            </Footer>
        </>
    )
}

export default Dash;