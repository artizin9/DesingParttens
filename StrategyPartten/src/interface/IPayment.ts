import { TipoCartao } from "./tipoCartao";

// Interface que possui o metodo pagar
export interface IPayment {
    pagar(valor: number): void
}