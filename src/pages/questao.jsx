import { useEffect, useState } from "react";

export default function Questao(){
    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/questao/1")
        .then(resp => resp.json())
        .then(setQuestao)
    }, [])
    
    function renderizarRespostas(){
        if(questao){
            return questao.respostas.map((resp, key) => {
                return <li key={key}>{resp}</li>
            })
        }

        return false;
    }

    return(
        <>
            <h1>Questão</h1>
            <div>
                <span>{questao?.enunciado}</span>

                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </>
    )
}