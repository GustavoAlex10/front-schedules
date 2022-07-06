import React from "react";
import { Container, ContainerStatus } from '../components/container';
import { CardPlanner, Day } from "../components/cardPlanner";
import { Notifications } from "../components/notifications";
import { Subscription, Text, TextSubscription, SubStatus, TextHolderSubs,
AreaTextNotifications} from "../components/subscriptions";

const Planner = () => {

    const days = 32;
    const daymap = []
    const notifay = []

    for (let i = 1; i < days; ++i) {
        daymap.push(i)
    }

    for (let i = 1; i < 4; ++i) {
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
                <Text>Schedules</Text>
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