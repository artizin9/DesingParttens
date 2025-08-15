import { Documento } from "./documento";

const doc = new Documento();

doc.publicar(); // Você não pode publicar um documento em rascunho.
doc.aprovar(); // Documento aprovado.
doc.publicar(); // Não é possível publicar um documento em revisão.
doc.aprovar(); // Documento em aprovado e pronto para publicação.
doc.publicar(); // Documento já está publicado.

/* Funcionou. Explicarei o porque da questão. Imagina que você tem um estado que pode mudar dependendo de ações, o state no documento.ts é que vai controlar isso. olhe isso

    setState(state: IDocumentoState): void {
            this.state = state;
        }

   esse metodo diz que o state do documento vai ser o estado que você passar como parametro, ou seja, se você chamar o metodo aprovar() do RascunhoState, ele vai mudar o state do documento para RevisaoState, e assim por diante.

   Permitindo assim o state ter um método com seus diferentes estados, ele pode ser aprovar rascunho, revisar ou publicar, dependendo do estado atual do documento, fazendo assim que o state do documento seja independente do estado atual do documento, com o metodo setState você pode mudar o estado do documento a qualquer momento, e isso é o que faz o padrão State funcionar.


   Para mais clareza, mostrarei isso: 
     ---- this.documento.setState(this.documento.publicarState); ---

    aqui o metodo setState mudou o state para o publicarState, que é o estado de um documento já publicado, e isso é feito dentro do metodo aprovar() do RevisaoState, ou seja, quando você aprova um documento em revisão, ele muda o state para publicarState, e assim por diante.

    a principio ele é rascunho

    doc.publicar(); // Você não pode publicar um documento em rascunho.
    doc.aprovar(); // Documento aprovado.

    por isso que neste caso você não consegue publicar, apenas aprovar o documento.

    doc.publicar(); // Não é possível publicar um documento em revisão.
    doc.aprovar(); // Documento em aprovado e pronto para publicação.

    agora o documento está em revisão, e você não pode publicar ele, apenas aprovar, e quando você aprova ele, o state muda para publicarState.

    doc.publicar(); // Documento já está publicado.

    agora o documento está publicado, e você não pode aprovar ele novamente, apenas publicar, e quando você chama o metodo publicar() do PublicarState, ele diz que o documento já está publicado.

    É assim que o padrão State funciona.
*/