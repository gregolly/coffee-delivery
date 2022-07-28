import { ContainerAddItems } from "../../Content/style";
import { ButtonRemove, CardTotalOrder, ContainerAddItemsSidebar, ContainerPrices, ContainerSidebar, SubmitedButton } from "./style";
import SmallCoffee from "../../../assets/small-coffee.png"
import IconTrash from '../../../assets/trash.svg'

export function Sidebar() {
    return (
        <ContainerSidebar>
            <h3>Cafés selecionados</h3>
            <CardTotalOrder>
                <div className="flex border">
                    <img src={SmallCoffee} />
                    <div>
                        <h4>Expresso Tradicional</h4>
                        <div className="flex gap">
                            <ContainerAddItemsSidebar>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </ContainerAddItemsSidebar>
                            <ButtonRemove>
                                <img src={IconTrash} />
                                Remover
                            </ButtonRemove>
                        </div>
                    </div>
                    <span className="price">9,90</span>
                </div>

                <div className="flex border">
                    <img src={SmallCoffee} />
                    <div>
                        <h4>Expresso Tradicional</h4>
                        <div className="flex gap">
                            <ContainerAddItemsSidebar>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </ContainerAddItemsSidebar>
                            <ButtonRemove>
                                <img src={IconTrash} />
                                Remover
                            </ButtonRemove>
                        </div>
                    </div>
                    <span className="price">9,90</span>
                </div>

                <div>
                    <ContainerPrices>
                        <span>Total de itens</span>
                        <span>R$ 29,70</span>
                    </ContainerPrices>

                    <ContainerPrices>
                        <span>Entrega</span>
                        <span>R$ 3,50</span>
                    </ContainerPrices>

                    <ContainerPrices>
                        <span>Total</span>
                        <span>R$ 33,20</span>
                    </ContainerPrices>
                </div>

                <SubmitedButton>confirmar pedido</SubmitedButton>
            </CardTotalOrder>
        </ContainerSidebar>
    )
}