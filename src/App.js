import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, FormControl, Grid, Col, Row } from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import '../src/Views/Welcome/Welcome.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      showModalLogin:false
    }

    this.handleShowModalLogin = this.handleShowModalLogin.bind(this)
    this.handleHideModalLogin = this.handleHideModalLogin.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleShowModalLogin(){
    this.setState({showModalLogin:true})
  }

  handleHideModalLogin(){
    this.setState({showModalLogin:false})
  }

  handleSubmit(){
    console.log("logueado")
  }
  
  render() {
    return (
      <div className = "welcome">
        <center><div className = "myJumbotron">
          <h1 className = "title_welcome">#VoluntariosChile</h1>
          <p className = "paraph_title">Únete a nuestra comunidad de voluntarios y ayuda a construir, </p>
          <p className = "paraph_title">reparar y dar sonrisas a familias que han sufrido por desastres naturales</p>
          <p className = "paraph_title">#Chile Ayuda a Chile</p>
          <Button bsStyle = "success" className = "btn_title_login" onClick = {() => {this.handleShowModalLogin()}}>Iniciar sesión</Button>
          <Button bsStyle = "success" className = "btn_title_register">Registrate</Button>
        </div></center>
        <Modal show = {this.state.showModalLogin} onHide = {this.handleHideModalLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid fluid>
              <Row>  
                <Col lg = {12} md = {12}>
                  <Form horizontal onSubmit = {this.handleSubmit}>
                    <FormGroup controlId = "login_username">
                      <Col sm = {12}>
                        <FormControl 
                          type = "text"
                          placeholder= "nombre usuario"
                          name = "username"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId = "login_password">
                      <Col sm = {12}>
                        <FormControl 
                          type = "password"
                          placeholder= "contraseña"
                          name = "pass"
                        />
                      </Col>
                    </FormGroup>
                    <Button bsStyle = "primary" className = "btn_login">Iniciar Sesión</Button>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
