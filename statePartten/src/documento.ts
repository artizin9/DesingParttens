import { IDocumentoState } from "./IDocumentoState";
import { PublicarState, RascunhoState, RevisaoState } from "./stateConcretes";

// Clase Documento que tem os estados rascunho, revisão e publicação, além disso o estado principal o state.
export class Documento {
    // Estado para fazer um rascunho
    rascunhoState: IDocumentoState;
    // Estado para fazer uma revisão
    publicarState: IDocumentoState;
    // Estado para publicar o documento
    revisaoState: IDocumentoState;

    // Estado que vai ser o atual do documento
    private state: IDocumentoState;

    // Aqui é uma instancia do documento, onde os estados vão ter o valor deles
    constructor(){
        this.rascunhoState = new RascunhoState(this)
        this.publicarState = new PublicarState(this);
        this.revisaoState = new RevisaoState(this);

        // O estado inicial do documento é o rascunho
        this.state = this.rascunhoState;
    }

    // Metodo que faz a mudança do estado do documento
    setState(state: IDocumentoState): void {
        this.state = state;
    }

    // Metodo que chama o metodo aprovar (já que ele é vai ser um dos estados do documento)
    aprovar() {
        this.state.aprovar();
    }

    // Metodo que chama o metodo publicar (já que ele é vai ser um dos estados do documento)
    publicar() {
        this.state.publicar();
    }
}