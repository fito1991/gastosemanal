import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';
import '../css/App.css';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			presupuesto: '',
			restante: '',
			gastos: {}
		};
		// this.agregarGasto = this.agregarGasto.bind(this);
	}
	

	componentDidMount() { // esto es como si fuera un document.ready
		this.obtenerPresupuesto();
	}

	obtenerPresupuesto = () => {
		let presupuesto = prompt('Cuál es el presupuesto?');

		let resultado = validarPresupuesto(presupuesto);
		if (resultado) {
			this.setState({
				presupuesto: presupuesto,
				restante: presupuesto // el restante será igual al presupuesto al inicio porque aun no hemos gastado nada
			});
		} else {
			this.obtenerPresupuesto();
		}
	}

	// Agregar un nuevo gasto al State


	agregarGasto = gasto => {

		// Tomar copia del state actual

		const gastos = {...this.state.gastos};
		// console.log(`Se agrego el gasto ${this.agregarGasto}`);
		// console.log(gastos);

		// agregar al gasto el objeto del state
		gastos[`gasto${Date.now()}`] = gasto;
		// console.log(gastos);

		// restar al presupuesto

		this.restarPresupuesto(gasto.cantidadGasto);

		// ponelo en el state
		this.setState({
			gastos: gastos
		});

	}

	// Restar del presupuesto cuando un gasto se creo

	restarPresupuesto = cantidad => {
		// leer el gasto
		//typeof devuelve el tipo de dato de la variable
		let restar = Number(cantidad);

		// Tomar copia del state actual
		let restante = this.state.restante;
		
		// lo restamos
		restante -= restar;

		restante = String(restante);

		// agregamos el nuevo state
		this.setState({
			restante: restante
		});
	}

	render() {
		return (
			<div className="App container">
			
				<Header titulo="Gastos Semanales"/>

				<div className="contenido-principal contenido">
					<div className="row">
					<div className="one-half column">

						<Formulario 
							agregarGasto={ this.agregarGasto }
						/>

					</div>
					<div className="one-half column">
						<Listado 
							gastos={this.state.gastos}
						/>
						<ControlPresupuesto 
							presupuesto = {this.state.presupuesto}
							restante = {this.state.restante}
						/>
					</div>            
					</div> 
				</div>

			</div>
		);
	}
}

export default App;
