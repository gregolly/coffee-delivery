import styled from "styled-components";

export const ContainerSidebar = styled.div`
    margin-top: 2.5rem;
    margin-left: 2rem;
`

export const CardTotalOrder = styled.div`
    background-color: #F3F2F2;
    padding: 1.5rem;
    border-radius: 6px;
    border-radius: 6px 44px;

    .flex {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 1.5rem;
    }

    .gap {
        gap: 8px;
    }

    .border {
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #e6e5e5;
    }

    h4 {
        font-weight: normal;
        margin-bottom: 0.5rem;
    }

    .price {
        font-weight: bold;
        display: flex;
        gap: 4px;
        color: #574F4D;

        &::before {
            content: 'R$';
            font-weight: bold;
        }
    }
`

export const ButtonRemove = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;
    border: none;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 0.75rem;

    width: 91px;
    height: 32px;


    background: #E6E5E5;
    border-radius: 6px;

`

export const ContainerAddItemsSidebar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background-color: #E6E5E5;
    padding: 0.5rem;
    font-size: 1rem;
    height: 2rem;

    &:first-child {
        color: ${props => props.theme.purpleDark};
    }
`

export const ContainerPrices = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    &:last-child {
        font-weight: bold;
        font-size: 1.25rem;
    }
`

export const SubmitedButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    border: none;
    margin-top: 1.5rem;

    width: 100%;
    height: 46px;

    /* Brand / Yellow */

    background: #DBAC2C;
    border-radius: 6px;
    color: #fff;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    font-stretch: 100;
    text-transform: uppercase;

    /* Inside auto layout */

    flex: none;
    order: 5;
    align-self: stretch;
    flex-grow: 0;
`
