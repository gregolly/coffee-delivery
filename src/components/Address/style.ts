import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: flex;
    max-width: 70rem;
    width: 100%;
    margin: 0 auto;

    h3 {
        margin-bottom: 0.9375rem;
    }
`

export const ContainerAddress = styled.div`
    margin: 0 auto;
    margin-top: 2.5rem;

    h4 {
        font-weight: bold;
        font-size: 16px;
        line-height: 130%;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
    }

    .flex-start {
        align-items: flex-start;
    }
`

export const FormContainer = styled.form`
    background-color: #F3F2F2;
    padding: 2.5rem;
    border-radius: 6px;

    .flex {
        display: flex;
        gap: 12px;
    }
`

const DefaultInput = styled.input`
    background-color: #EDEDED;
    padding: 0.75rem;
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    margin-bottom: 1rem;
`

export const CEPinput = styled(DefaultInput)`
    margin-top: 2.25rem;
`

export const StreetInput = styled(DefaultInput)`
    width: 100%;
`

export const NumberInput = styled(DefaultInput)``

export const ComplementoInput = styled(DefaultInput)`
    flex: 1;
`
export const HoodInput = styled(DefaultInput)``

export const CityInput = styled(DefaultInput)`
    flex: 1;
`

export const StateInput = styled(DefaultInput)``