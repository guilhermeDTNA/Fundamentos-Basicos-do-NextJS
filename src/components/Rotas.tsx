'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Rotas(){
    const router = useRouter();

    function navegacaoParam(id: number, param: string){
        router.push(`/rotas/${id}/buscar?param=${param}`)
    }
    
    return (
        <>
            <h2>Rotas possíveis</h2>
          
            <ul>
                <Link href="/primeiro">
                    <li>Primeiro</li>
                </Link>

                <Link href="/segundo">
                    <li>Segundo</li>
                </Link>

                <Link href="/typescript">
                    <li>TypeScript</li>
                </Link>

                <Link href="/modulo/importacao">
                    <li>Importação de componentes</li>
                </Link>

                <Link href="/rotas/1234/buscar">
                    <li>Rotas dinâmicas sem parâmetros</li>
                </Link>

                <li onClick={() => navegacaoParam(123, "teste")}>
                    Rotas dinâmicas com parâmetros
                </li>
            </ul>
        </>          
    )
}