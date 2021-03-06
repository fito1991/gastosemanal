import React, { Component } from 'react';
import {revisarPresupuesto} from '../helper';
import PropTypes from 'prop-types';

class Restante extends Component {
    render() {

        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;

        return (
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {parseFloat(this.props.restante).toFixed(2)}
            </div>
        );
    }
}

Restante.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}
export default Restante;