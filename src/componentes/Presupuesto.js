import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Presupuesto extends Component {
    render(){
        return(
            <div className="alert alert-primary">
                Presupuesto: $ {parseFloat(this.props.presupuesto).toFixed(2)}
            </div>
        );
    }
}

Presupuesto.propTypes = {
    presupuesto: PropTypes.string.isRequired
}
export default Presupuesto;