// Define um conteúdo estático, não muda (desde que esteja em produção)
// Executa apenas no lado do servidor
export async function getStaticProps(){
    console.log("[Server] função executada no servidor");
    const resp = await fetch("http://localhost:3000/api/produtos")
    const produtos = await resp.json()

    return {
        // Define após quanto tempo deva atualizar o conteúdo (em segundos)
        //revalidate: 10,
        props: {
            produtos
        }
    }
}

export default function Estatico3(props){
    console.log("[Client] função executada no cliente");

    function renderizarProdutos(){
        return props.produtos.map(produto => {
            return (
                <li key={produto.id}>
                    {produto.id}: {produto.nome} tem o preço de R$ {produto.preco}
                </li>
            )
        })
    }
    return(
        <div>
            <h1> Estático #03</h1>

            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}