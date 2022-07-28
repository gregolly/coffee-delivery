import { HeroContainer, OverlayBackground } from "./style";
import IconCartWhite from "../../assets/cart-white.svg"
import IconClock from "../../assets/clock.svg"
import IconPackage from "../../assets/package.svg"
import IconCoffee from "../../assets/coffee.svg"
import HeroImage from "../../assets/imagem.png"

export function Hero() {
    return (
        <>
            <OverlayBackground />
            <HeroContainer>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
                    <ul>
                        <div>
                            <li><img className="cartWhite" src={IconCartWhite} />Compra simples e segura</li>
                            <li><img className="package" src={IconPackage} />Embalagem mantém o café intacto</li>
                        </div>
                        <div>
                            <li><img className="clock" src={IconClock} />Entrega rápida e rastreada</li>
                            <li><img className="coffee" src={IconCoffee} />O café chega fresquinho até você</li>
                        </div>
                    </ul>
                </div>
                <div>
                    <img src={HeroImage} alt="Copo de cafe" />
                </div>
            </HeroContainer>
        </>
    )
}