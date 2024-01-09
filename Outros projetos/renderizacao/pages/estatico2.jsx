// Define um conteúdo estático, não muda (desde que esteja em produção)
export function getStaticProps(){
    return {
        // Define após quanto tempo deva atualizar o conteúdo (em segundos)
        revalidate: 10,
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props){

    return(
        <div>
            <h1> Estático #02</h1>

            {props.numero}
        </div>
    )
}