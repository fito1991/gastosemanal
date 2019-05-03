import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    render(){
        const {cantidadGasto, nombreGasto} = this.props.gasto;
        // console.log(cantidadGasto);
        // console.log(nombreGasto);
        return(
            <li className="gastos">
                <p>
                    {nombreGasto}
                    <span className="gasto">$ {parseFloat(cantidadGasto).toFixed(2)}</span>
                </p>
            </li>
        );
    }
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gasto;