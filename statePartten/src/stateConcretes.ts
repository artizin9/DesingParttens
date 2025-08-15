import { Documento } from "./documento";
import { IDocumentoState } from "./IDocumentoState";

// Classe RascunhoState aprova o rascunho e muda o state para RevisaoState.
export class RascunhoState implements IDocumentoState {
    constructor(private documento: Documento) {}

    aprovar(): void {
        console.log("Documento aprovado.");
        // O state do documento por padrão é a revisão, mas, eu preciso garantir, que o state vai mudar de instancia para revisão
        this.documento.setState(this.documento.revisaoState)
    }

    publicar(): void {
        console.log("Você não pode publicar um documento em rascunho.");
    }
}

// Classe RevisaoState aprova o documento e muda o state para PublicarState.
export class RevisaoState implements IDocumentoState {
    constructor(private documento: Documento) {}

    aprovar(): void {
        console.log("Documento em aprovado e pronto para publicação.");
        // O state do documento muda para o PublicarState já que o documento foi aprovado pela RevisãoState
        this.documento.setState(this.documento.publicarState);
    }

    publicar(): void {
        console.log("Não é possível publicar um documento em revisão.")
    }
}

// Classe PublicarState que representa o estado de um documento já publicado.
export class PublicarState implements IDocumentoState {
    constructor(private documento: Documento) {}

    aprovar(): void {
        console.log("Documento já publicado, não é possível aprovar novamente.");
        this.documento.setState(this.documento.publicarState);
    }

    publicar(): void {
        console.log("Documento já está publicado.");
    }
}