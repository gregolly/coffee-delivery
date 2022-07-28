import styled from "styled-components";

export const ContainerContent = styled.div`
    width: 70rem;
    padding: 2rem 0;
    margin: 0 auto;

    h3 {
        margin-bottom: 0.9375rem;
    }
`

export const ContainerItems = styled.div`
    display: flex;
    flex-wrap: wrap;

    #coffe-wraper {
        background-color: #f3f2f2;
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        position: relative;
        margin-top: 2.125rem;
        border-radius: 6px 36px;


        .image-product {
            position: absolute;
            top: -20px;
        }


        small {
            background-color: ${props => props.theme.yellowLight};
            color: ${props => props.theme.yellowDark};
            padding: 0.25rem 0.5rem;
            border-radius: 20px;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.625rem;
            margin-top: 5.625rem;
            margin-bottom: 1rem;
        }

        h3 {
            margin-bottom: 0.5rem;
        }

        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;

            text-align: center;
            color: #8D8686;
        }

        .price {
            display: flex;
            font-weight: bold;
            font-size: 24px;
            line-height: 130%;
            align-items: baseline;
            gap: 2px;

            text-align: right;

            color: #574F4D;

            &::before {
                content: 'R$';
                display: flex;
                font-weight: lighter;
                font-size: 14px;
            }
        }


    }
`

export const ContainerPrice = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 2.0625rem;
    align-items: center;

    .container-flex {
        display: flex;
        gap: 10px;
    }

    .cart-button-card {
        background-color: #4B2995;
        padding: 0.7rem;
        border-radius: 6px;
    }
`

export const ContainerAddItems = styled.div`
    display: flex;
    gap: 10px;
    border-radius: 6px;
    background-color: #E6E5E5;
    padding: 0.5rem;
    font-size: 1rem;

    &:first-child {
        color: ${props => props.theme.purpleDark};
    }
`