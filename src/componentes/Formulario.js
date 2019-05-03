import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component{

    constructor(props){
        super(props);

        // ref para los campos del formulario
        this.nombreGastoRef = React.createRef();
        this.cantidadGastoRef = React.createRef();

        // método crearGasto
        this.crearGasto = this.crearGasto.bind(this);
    }

    crearGasto(e){
        
        // Prevenir el default
        e.preventDefault();

        // Crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto: this.cantidadGastoRef.current.value
        }

        // console.log(gasto);

        // Agrearlos y enviarlos por props
        this.props.agregarGasto(gasto);

        // Resetear el formulario (opcional)
        e.currentTarget.reset();
    }

    render(){
        return(
            <form onSubmit={ this.crearGasto }>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={ this.nombreGastoRef } className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={ this.cantidadGastoRef } className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default Formulario;