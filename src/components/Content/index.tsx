import { ContainerAddItems, ContainerContent, ContainerItems, ContainerPrice } from "./style";
import CoffeImage from "../../assets/coffee.png"
import CartWhite from "../../assets/cart-white.svg"

export function Content() {
    return (
        <ContainerContent>
            <h3>Nossos cafés</h3>
            <ContainerItems>
                <div id="coffe-wraper">
                    <img className="image-product" src={CoffeImage} />
                    <small>Tradicional</small>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>
                    <ContainerPrice>
                        <span className="price">9,90</span>
                        <div className="container-flex">
                            <ContainerAddItems>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </ContainerAddItems>
                            <img className="cart-button-card" src={CartWhite} />
                        </div>
                    </ContainerPrice>
                </div>
            </ContainerItems>
        </ContainerContent>
    )
}