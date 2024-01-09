import { useState, useEffect } from "react"

export default function Dinamico1(){
    const [num, setNum] = useState(0)

    // O useEffect sinaliza que o conteúdo será dinâmico
    useEffect(() => {
        setNum(Math.random())
    }, [])

    return(
        <div>
            <h1> Dinâmico #01</h1>

            <h2>{num}</h2>
        </div>
    )
}