import { ButtonPaymentMethod, PaymentMethodContainer } from "./style"
import IconCurrent from "../../../assets/current.svg"
import IconCard from "../../../assets/card.svg"
import IconHouse from "../../../assets/house.svg"
import IconMoney from "../../../assets/money.svg"
import { useState } from "react"

export function PaymentMethod() {
    const [isClicked, setIsClicked] = useState( "card")


    return (
        <PaymentMethodContainer>
            <div className="flex flex-start">
                <img src={IconCurrent} />
                <div>
                    <h4>Endereço de Entrega</h4>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </div>
            <div className="flex">
                <ButtonPaymentMethod
                    type="button" 
                    onClick={() => { setIsClicked("card")}}
                    isActive={isClicked === "card"}
                    background="background"
                    border="border"
                >
                    <img src={IconCard} />
                    Cartao de credito
                </ButtonPaymentMethod>
                <ButtonPaymentMethod
                    type="button" 
                    onClick={() => { setIsClicked("debit")}}
                    isActive={isClicked === "debit"}
                    background="background"
                    border="border"
                >
                    <img src={IconHouse} />
                    Cartao de debito
                </ButtonPaymentMethod>
                <ButtonPaymentMethod
                    type="button" 
                    onClick={() => { setIsClicked("money")}}
                    isActive={isClicked === "money"}
                    background="background"
                    border="border"
                >
                    <img src={IconMoney} />
                    Dinheiro
                </ButtonPaymentMethod>
            </div>
        </PaymentMethodContainer>
    )
}