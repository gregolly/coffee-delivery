import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 70rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    margin: 0 auto;

    .cart {
        background-color: #F1E9C9;
        padding: 0.5rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
    }

    .location {
        display: flex;
        gap: 12px;
    }

    .user-location {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #8047F8;
        background-color: #EBE5F9;
        padding: 8px;
        border-radius: 6px;
    }


`