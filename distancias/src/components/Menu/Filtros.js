import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';
import './styles.css';
const options = [
  'Azopardo', 'Rosario', 'Cordoba'
]
const Filtros = props => {
    return (
        <div>{
            props.filtro == 1 ?
                <div className ="Sucursal"> 
                    <DropDown options={options} placeholder="Seleccionar Sucursal"/>
                </div>
            : props.filtro == 2 ?
                <div>  
                    <TextField
                    id="legajo"
                    label="Legajo"
                    margin="normal"
                    /> 
                </div>
            : props.filtro == 3 ?
                 <Button variant="contained" color="primary">
                      Cargar Excel
                 </Button> 
            : null
        }
        </div>
    );
};

Filtros.propTypes = {
    
};

export default Filtros;