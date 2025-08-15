// Classe abstrata que define o "esqueleto" do algoritmo de processamento de um documento
export abstract class Documento {

    // Método template: define a sequência de passos do algoritmo
    processar(): void {
        this.abrir()      // passo fixo: sempre abrir o documento
        this.validar()    // passo variável: será definido pelas subclasses
        this.salvar()     // passo fixo: sempre salvar o documento
    }

    // Método concreto: implementação padrão para abrir um documento
    abrir() {
        console.log("Abrir Documento...")
    }

    // Método abstrato: cada subclasse precisa implementar como validar o documento
    abstract validar(): void;

    // Método concreto: implementação padrão para salvar um documento
    salvar() {
        console.log("Salvar Documento...")
    }
}
