import React from 'react';
import PropTypes from 'prop-types';
import InformacionEmpleados from './InformacionEmpleados';
import MapaEmpleados from './MapaEmpleados';

const Empleados = props => {
    return (
        <div>
            <InformacionEmpleados data={ props.data }/>
            <MapaEmpleados/>
        </div>
    );
};

Empleados.propTypes = {
    
};

export default Empleados;