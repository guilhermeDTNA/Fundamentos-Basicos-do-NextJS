import { useRouter } from 'next/router';

export default function Buscar(){
    const router = useRouter();
    console.log(router);
    const id = router.query.id;
    const param = router.query.param;

    return(
        <>
            <h3>Rota dinâmica!</h3>
            <p>Rotas / {id} / buscar ? {param ? "param="+param : ""}</p>
        </>
    )
}