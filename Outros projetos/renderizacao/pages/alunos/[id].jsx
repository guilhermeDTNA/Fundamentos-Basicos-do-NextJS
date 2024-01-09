// Degine quais paths serão suportados nessa página
export async function getStaticPaths(){
    const resp = await fetch(`http://localhost:3000/api/alunos/tutores`)
    const ids = await resp.json()

    const paths = ids.map(id => {
        return {
            params: {
                id: `${id}`
            }
        }
    })

    return{
        fallback: true, 
        // false: gera 404 quando o id for diferente de um desses
        // true: vai chamar o getStaticProps pela 1ª vez, 
            //depois exibe a página estática
        paths
    }
}

export async function getStaticProps(context){
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await resp.json()

    return{
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props){
    const {aluno} = props;
    return(
        <>
            <h1>Detalhes do aluno</h1>

            {aluno ? 
                <ul>
                    <li>{aluno.id}</li>
                    <li>{aluno.nome}</li>
                    <li>{aluno.email}</li>
                </ul>
            : false}
            
        </>
    )
}