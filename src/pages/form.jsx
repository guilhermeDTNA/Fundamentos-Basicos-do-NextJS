import { useState } from "react";

export default function Form(){
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [usuarios, setUsuarios] = useState([]);

    async function salvarUsuario(e){
        // Evita de atualizar a página
        e.preventDefault();

        await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify({
                nome,
                idade
            })
        })

        const resp = await fetch("/api/form")
        const usuarios = await resp.json()
        setUsuarios(usuarios);

        setNome("");
        setIdade(0);
    }

    function renderizarUsuarios(){
        return usuarios.map((usuario, key) => {
            return <li key={key}>{usuario.nome} tem {usuario.idade} anos</li>
        })
    }

    return(
        <>
            <h2>Integrando formulário com API</h2>

            <form onSubmit={salvarUsuario}>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                <input type="number" value={idade} onChange={e => setIdade(e.target.value)} />

                <button type="submit">Enviar</button>
            </form>

            <ul>
                {renderizarUsuarios()}
            </ul>
        </>
    )
}