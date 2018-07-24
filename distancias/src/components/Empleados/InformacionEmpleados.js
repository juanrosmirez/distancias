import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import './styles.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter ,Comparator } from 'react-bootstrap-table2-filter';

var empleados = [{
      legajo: 1,
      nombre: "Juan",
      apellido: "Rosmirez",
      direccion: "Albariño 1756",
      distancia: "30Km",
      codigoPostal: "1440",
      localidad: "Mataderos",
      provincia: "Buenos Aires",
  },{
      legajo: 2,
      nombre: "Pedro",
      apellido: "Perez",
      direccion: "Lezica 200",
      distancia: "45Km",
      codigoPostal: "1556",
      localidad: "Rafael Calzada",
      provincia: "Buenos Aires",
  }];

const numberFilterLegajo = textFilter({
  defaultValue: '1', // default filtering value
  comparator: Comparator.EQ, // default is Comparator.LIKE
  caseSensitive: true, // default is false, and true will only work when comparator is LIKE
  style: { visibility: 'hidden' }, // your custom styles on input
  delay: 1000 // how long will trigger filtering after user typing, default is 500 ms
});
const columns = [{
  dataField: 'legajo',
  text: 'Legajo',
  filter: numberFilterLegajo,
}, {
  dataField: 'nombre',
  text: 'Nombre'
}, {
  dataField: 'apellido',
  text: 'Apellido'
}, {
  dataField: 'direccion',
  text: 'Direccion'
}, {
  dataField: 'distancia',
  text: 'Distancia'
}, {
  dataField: 'codigoPostal',
  text: 'Codigo postal'
}, {
  dataField: 'localidad',
  text: 'Localidad'
}, {
  dataField: 'provincia',
  text: 'Provincia'
}];



const InformacionEmpleados = props => {
    return (
        <div className="Informacion-Empleados">
            <BootstrapTable keyField='id' data={ empleados } columns={ columns } filter={ filterFactory() }  />
        </div>
    );
};

InformacionEmpleados.propTypes = {
    
};

export default InformacionEmpleados;