import styled from "styled-components";

interface ButtonProps {
    isActive: boolean
    background: "background"
    border: "border"
}

const background = {
    background: "#EBE5F9",
}

const border = {
    border: "#8047F8"
}

export const PaymentMethodContainer = styled.div`
    margin: 0 auto;
    margin-top: 2.5rem;
    background-color: #F3F2F2;
    padding: 2.5rem;
    border-radius: 6px;

    .flex {
        display: flex;
        gap: 12px;
        margin-top: 2rem;
    }

    .flex-start {
        align-items: flex-start;
    }
`

export const ButtonPaymentMethod = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 12px;

    width: 13rem;
    height: 3.1875rem;

    background: ${props => props.isActive ? background[props.background] : "#E6E5E5"};
    border-radius: 6px;
    border: 1px solid ${props => props.isActive ? border[props.border] : "transparent"};
    text-transform: uppercase;
`