import { Component } from "react"

//Criando componente via class
export default class segundo extends Component{
    state = {
        clientX: 0,
        clientY: 0
    }

    updateMouse = (e) => {
        this.setState({
            clientX: e.clientX,
            clientY: e.clientY
        })
    }

    render(){
        return (
            <div style={{
                height: "100svh"
            }} onMouseMove={this.updateMouse}>
                <h1>Componente criado via class</h1>

                <h3>Localização do mouse:</h3>
                <span
                    style={{
                        display: "block"
                    }}
                >{this.state.clientX}</span>
                <span
                    style={{
                        display: "block"
                    }}
                >{this.state.clientY}</span>
            </div>
        )
    }
}