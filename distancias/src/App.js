import React, { Component } from 'react';
import logo from './logo.jpg';
import indra from './indra.jpg';
import './App.css';
import Empleados from './components/Empleados';
import Workbook from 'react-excel-workbook';
import { post } from 'axios';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: null,
      file:null,
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  fileUpload = (file) =>{
    const url = 'http://192.168.214.7:8080/distancias/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }
  onFormSubmit = (e) => {
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange = (e) => {
    this.setState({file:e.target.files[0]})
  }
  componentDidMount(){
      fetch('http://192.168.214.7:8080/distancias/').then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({data});
      })
    }
  handleChange = (event) => {
    console.log('Selected file:', event.target.files[0]);
  }
  render() {
    return (
      <div className="App">
        <example/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={indra} alt="indra" />
          <br/>
          <br/>
          <br/> 
          <h1 className="App-title">Aplicativo Indra Distancias</h1>
        </header>
        <div className="row text-center" style={{marginTop: '100px'}}>
          
    <h1>Descarga de Empleados en Excel</h1>
    <Workbook filename="example.xlsx" element={<button className="Boton-Subida">Descargar</button>}>
      <Workbook.Sheet data={ this.state.data } name="Sheet A">
        <Workbook.Column label="Legajo" value="legajo"/>
        <Workbook.Column label="Calle" value="calle"/>
        <Workbook.Column label="Numero" value="numero"/>
        <Workbook.Column label="Nombre" value="nombreEmpleado"/>
        <Workbook.Column label="Apellido" value="apellidoEmpleado"/>
        <Workbook.Column label="Distancia" value="distancia"/>
        <Workbook.Column label="Sede" value="sede"/>
        <Workbook.Column label="Codigo postal" value="codigoPostal"/>
        <Workbook.Column label="Localidad" value="localidad"/>
        <Workbook.Column label="Provincia" value="provincia"/>
      </Workbook.Sheet>
    </Workbook>
    
   
  </div>
  <div >
     <form onSubmit={this.onFormSubmit}>
        <br/><br/><br/>
        <h1>Subir Excel de Empleados</h1>
        <input type="file" onChange={this.onChange} className="Subida"/>
        <br/>
        <button type="submit" className="Boton-Subida">Subir</button>
      </form>
  </div> 
         <Empleados data={this.state.data}/> 
      </div>
    );
  }
}

export default App;
