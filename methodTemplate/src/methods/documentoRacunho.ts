// Importa a classe base Documento
import { Documento } from "./documento";

// Subclasse que representa um documento em rascunho
export class DocumentoRascunho extends Documento {

    // Implementa o método abstrato validar() da classe Documento
    validar(): void {
        console.log("Validando rascunho...")
    }
}
