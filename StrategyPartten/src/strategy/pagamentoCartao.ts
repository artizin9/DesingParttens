import { IPayment } from "../interface/IPayment";
import { TipoCartao } from "../interface/tipoCartao";

// Estrategia de pagamento, no caso aqui trabalhamos com o cartao, onde pode ser debito ou credito 
export class PagamentoCartao implements IPayment {
    // Atributo para saber qual tipo iremos usar
    constructor(private tipoCartao: TipoCartao){}
    
    // Crédito
    private credito(valor: number) {
        console.log(`Pagando ${valor} via crédito`)
    }

    // Débito
    private debito(valor: number) {
        console.log(`Pagando ${valor} via débito`)
    }

    // Método pagar, nesse caso dependendo do valor que eu trazer ele vai me retornar o método corretos
    pagar(valor: number): void {
        this.tipoCartao === "credito" ? this.credito(valor) : this.debito(valor)
    }
}