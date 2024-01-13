interface pessoaProps{
  nome: string,

  // Idade é opcional
  idade?: number,
  deMaior: boolean,

  // Array
  provas: Array<string>,

  //Tupla
  endereco: [string, number]
}

function Pessoa(props: pessoaProps){

  return(
    <>
      <p>Nome: {props.nome}</p>
      
      {props.idade ? 
        <p>Idade: {props.idade}</p>
      : ""}

      <ul>
        {
          props.provas.map((prova: string, key: number) => 
            <li key={key}><p>Prova: {prova}</p></li>
          )
        }
      </ul>

      <p>{props.endereco}</p>
    </>
  )
}

export default function Home() {
  return (
    <div>
      <Pessoa nome="Guilherme" idade={25} deMaior={true} 
        provas={["1", "2", "3"]}
        endereco={["Rua", 22]}
      />


<Pessoa nome="Guilherme" deMaior={true} 
        provas={["1", "2", "3"]}
        endereco={["Rua", 22]}
      />
    </div>
  )
}
