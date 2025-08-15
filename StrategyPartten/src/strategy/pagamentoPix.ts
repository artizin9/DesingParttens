import { IPayment } from "../interface/IPayment";
import { TipoCartao } from "../interface/tipoCartao";

// Estrategia de pagamento nesse caso via pix
export class PagamentoPix implements IPayment {
    pagar(valor: number): void {
        console.log(`Pagando ${valor} via PIX`)
    }
}