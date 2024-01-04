import FuncaoDefault, { 
    Comp2 as FuncaoSec,
    Comp3,
    Comp4
 } from '/src/components/modulo/funcionais'

export default function Teste(){
    return(
        <div>
            <h2>Importando módulos com o sistema ECMAScript</h2>
            <FuncaoDefault />
            <FuncaoSec />
            <Comp3 />
            <Comp4 msg="Comp4" />
        </div>
    )
}