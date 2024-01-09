// Famoso SSR, gera o HTML sempre que a página é requisitada
export function getServerSideProps(){
    console.log("[Server] gerando props para o componente...")
    
    return{
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico2(props){

    return(
        <div>
            <h1>Dinâmico #02</h1>

            <h2>{props.numero}</h2>
        </div>
    )
}