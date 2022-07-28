import { CEPinput, CityInput, ComplementoInput, ContainerAddress, ContainerWrapper, FormContainer, HoodInput, NumberInput, StateInput, StreetInput } from "./style";
import { useForm } from 'react-hook-form'
import IconLocation from "../../assets/icon-location.svg"
import { PaymentMethod } from "./PaymentMethod";
import { Sidebar } from "./Sidebar";

export function Address() {
    const { register } = useForm()
    return(
        <ContainerWrapper>
            <div>
                <ContainerAddress>
                    <h3>Complete seu pedido</h3>
                    <FormContainer>
                        <div className="flex flex-start">
                            <img src={IconLocation} />
                            <div>
                                <h4>Endereço de Entrega</h4>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </div>
                        <CEPinput 
                            type="text" 
                            placeholder="CEP" 
                            { ...register('CEP')} 
                        />
                        <StreetInput
                            type="text"
                            placeholder="Rua"
                            {...register('Rua')}
                        />
                        <div className="flex">
                            <NumberInput
                                type="number"
                                placeholder="Numero"
                                {...register('Numero')}
                            />
                            <ComplementoInput
                                type="text"
                                placeholder="Complemento"
                                {...register('Complemento')}
                            />
                        </div>
                        <div className="flex">
                            <HoodInput
                                type="text"
                                placeholder="Bairro"
                                {...register('Bairro')}
                            />
                            <CityInput
                                type="text"
                                placeholder="Cidade"
                                {...register('Cidade')}
                            />
                            <StateInput
                                type="text"
                                placeholder="UF"
                                {...register('UF')}
                            />
                        </div>
                    </FormContainer>
                </ContainerAddress>

                <PaymentMethod />
            </div>

            <Sidebar />
        </ContainerWrapper>
    )
}