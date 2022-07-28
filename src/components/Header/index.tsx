import logoCoffee from "../../assets/logo.svg"
import IconCart from "../../assets/icon-cart.svg"
import IconLocation from "../../assets/location.svg"
import { ContainerHeader } from "./style"
import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <ContainerHeader>
            <NavLink to="/">
                <img src={logoCoffee} />
            </NavLink>
            <div className="location">
                <div className="user-location">
                    <img src={IconLocation} />
                    <span>Porto Alegre, RS</span>
                </div>
                <NavLink className="cart" to="/Cart">
                    <img src={IconCart} alt="icone do carrinho de compra" />
                </NavLink>
            </div>
        </ContainerHeader>
    )
}