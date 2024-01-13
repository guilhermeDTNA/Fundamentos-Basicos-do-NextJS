import { Component } from "react"

interface Humano {
    nome: string,
    saudar(sobrenome: string): void
}

export default class Classe extends Component implements Humano{
    nome: string = ""
    sobrenome: string = ""

    saudar(){
        console.log("Olá, meu nome é "+this.nome+" "+this.sobrenome)
        return("Olá, meu nome é "+this.nome+" "+this.sobrenome)
    }

    render(){
        return(
            <>
                {this.saudar()}

                
                <p>Olá, meu nome é {this.nome} {this.sobrenome}</p>
                
            </>
        )
    }
}

const minhaClasse = new Classe({})
minhaClasse.nome = "Guilherme"
minhaClasse.sobrenome = "Guilherme"
minhaClasse.saudar()