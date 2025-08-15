// Importa a classe base Documento
import { Documento } from "./documento";

// Subclasse que representa um documento final
export class DocumentoFinal extends Documento {

    // Implementa o método abstrato validar() da classe Documento
    validar(): void {
        console.log("Validando Documento...")
    }
}
