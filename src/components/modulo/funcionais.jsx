export default function Comp1(){
    return <h2>Comp1</h2>
}

export const Comp2 = function(){
    return <h2>Comp2</h2>
}

export const Comp3 = () => {
    return <h2>Comp3</h2>
}

export const Comp4 = (props) => <h2>{props.msg}</h2>