import { IPayment } from "./interface/IPayment";
import { PagamentoCartao } from "./strategy/pagamentoCartao";
import { PagamentoPix } from "./strategy/pagamentoPix";

// Classe caixa, a classe que principal que vai processar meus pagamentos
class Caixa {
    constructor(private pay: IPayment){}

    processarPagamento(valor: number){
        this.pay.pagar(valor)
    }
}

const caixa1 = new Caixa(new PagamentoCartao("debito"));
caixa1.processarPagamento(100)

const caixa2 = new Caixa(new PagamentoPix());
caixa2.processarPagamento(120)

// Usar o strategyPartten ajuda, pois eu utilizo bastante de boas práticas de código e deixo de utilizar if, else if, else ou switch case. Nesse caso eu não necessito ter que passar uma condição para saber do meu tipo de pagamento, cartão ou pix, já que elas são as relações pais com minha class Caixa (no caso do método débito ou crédito elas não são diretamente relacionadas com a class Caixa e sim indiretamente). Logo se torna simples a manutenibilidade do código e rápido em mémoria.