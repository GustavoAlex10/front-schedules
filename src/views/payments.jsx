import React from "react";
import { CardPayment, ContainerPayment, FooterCard, HeaderCard, PhotoUser, Text } from "../components/payments/cardPayment";

const Payment = () => {

    let notifay = []
    for (let i = 1; i < 5; ++i) {
        notifay.push(i)
    }
    
    return (
        <ContainerPayment>
            {
                notifay.map((a, i) => {
                    return (
                        <CardPayment key={i}>
                            <HeaderCard>
                                <PhotoUser src="" />
                                <Text>Nome</Text>
                                <Text>Status Pay</Text>
                            </HeaderCard>
                            <FooterCard>a</FooterCard>
                        </CardPayment>
                    )
                })
            }
        </ContainerPayment>
    )
}
export default Payment;