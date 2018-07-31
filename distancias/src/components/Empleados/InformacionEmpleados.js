import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import './styles.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter ,Comparator,numberFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const numberFilterLegajo = numberFilter({
  
  delay: 600,  // how long will trigger filtering after user typing, default is 500 ms
  placeholder: 'custom placeholder',  // placeholder for number input
  withoutEmptyComparatorOption: false,  // dont render empty option for comparator
  withoutEmptyNumberOption: false,  // dont render empty option for numner select if it is defined
  comparators: [Comparator.LE],  // Custom the comparators
  style: { display: 'inline-grid' },  // custom the style on number filter
  className: 'custom-numberfilter-class',  // custom the class on number filter
  comparatorStyle: { widht:'0px',height:'0px',visibility:'hidden' }, // custom the style on comparator select
  defaultValue: {comparator: Comparator.LE }  // default value
})

const columns = [{
  dataField: 'legajo',
  text: 'Legajo',
  filter: textFilter(),
}, {
  dataField: 'calle',
  text: 'Calle',
  filter: textFilter(),
}, {
  dataField: 'numero',
  text: 'Numero',
  filter: textFilter(),
}, {
  dataField: 'nombreEmpleado',
  text: 'Nombre',
  filter: textFilter(),
}, {
  dataField: 'apellidoEmpleado',
  text: 'Apellido',
  filter: textFilter(),
   headerStyle: {
  }
},{
  dataField: 'distancia',
  text: 'Distancia',
  filter: numberFilterLegajo,
},{
  dataField: 'sede',
  text: 'Sede',
  filter: numberFilterLegajo,
}, {
  dataField: 'codigoPostal',
  text: 'Codigo postal',
  filter: textFilter(),
}, {
  dataField: 'localidad',
  text: 'Localidad',
  filter: textFilter(),
}, {
  dataField: 'provincia',
  text: 'Provincia',
  filter: textFilter(),
}];
const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'black', border: '1px solid black', padding: '0.5em' }}>Empleados</h3>;
const InformacionEmpleados = props => {
    return (
        <div>
            <BootstrapTable keyField='id' data={ props.data } columns={ columns } caption={<CaptionElement />} filter={ filterFactory() } pagination={ paginationFactory() }  />
        </div>
    );
};

InformacionEmpleados.propTypes = {
    
};

export default InformacionEmpleados;