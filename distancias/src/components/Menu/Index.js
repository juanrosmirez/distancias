import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filtros from './Filtros';
import Button from '@material-ui/core/Button';

class Menu extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            filtro: 1,
        }
    }
    sucursal = () => this.setState({filtro:1})
    legajo = () => this.setState({filtro:2})
    cargarExcel = () => this.setState({filtro:3})

    render() {
        return (
            <div>
                    <Button onClick={this.sucursal}> Sucursal </Button>
                    <Button onClick={this.legajo}> Legajo </Button>
                    <Button onClick={this.cargarExcel}> Cargar Excel </Button>
                     <Filtros filtro={this.state.filtro}/>
            </div>
        );
    }
}

Menu.propTypes = {

};

export default Menu;