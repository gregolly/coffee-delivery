import styled from "styled-components";
import BackgroundImage from "../../assets/background.png"

export const HeroContainer = styled.main`
    width: 70rem;
    display: flex;
    margin: 0 auto;
    margin-top: 92px;
    position: relative;

    h1 {
        font-size: 3rem;
        line-height: 1.4;
    }

    h3 {
        font-weight: 300;
        margin-top: 16px;
    }

    ul {
        margin-top: 66px;

        & > div {
            display: flex;
            margin-bottom: 20px;
        }

        li {
            list-style: none;
            display: flex;
            align-items: center;
            padding-right: 40px;
            gap: 12px;

            .cartWhite {
                background-color: ${props => props.theme.yellowDark};
                padding: 8px;
                border-radius: 50%;
            }

            .package {
                background-color: ${props => props.theme.baseColor};
                padding: 8px;
                border-radius: 50%;
            }

            .clock {
                background-color: ${props => props.theme.orange};
                padding: 8px;
                border-radius: 50%;
            }

            .coffee {
                background-color: ${props => props.theme.purpleDark};
                padding: 8px;
                border-radius: 50%;
            }
        }
    }
`

export const OverlayBackground = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`