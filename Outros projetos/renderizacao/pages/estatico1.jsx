// Define um conteúdo estático, não muda (desde que esteja em produção)
export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico1(props){

    return(
        <div>
            <h1> Estático #01</h1>

            {props.numero}
        </div>
    )
}