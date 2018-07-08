import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, FormControl, Grid, Col, Row } from 'react-bootstrap'
import './Welcome.css'
import { format } from 'util';
import PropTypes from "prop-types";
import { ClipLoader } from 'react-spinners';

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props){
    super(props)
    this.state={
      showModalLogin:false,
      loading:false
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

  handleSubmit(event){
    event.preventDefault()
    this.setState({loading:true})
    const data = new FormData(event.target)
    var jsonData = {
      firstName:data.get('username'),
      password:data.get('pass')
    }
    fetch('http://165.227.189.25:8080/hack-0.0.1-SNAPSHOT/voluntario/auth/',{
      method:'POST',
      body:JSON.stringify(jsonData)
    })
    .then(response => response.json())
    .then(res => {
        this.setState({loading:false})
        if(res.id !==0 )
          this.context.router.history.push("/user/myVolunteers")
        else
          console.log("login fallido")
    })
    
  }

  render() {
    return (
      <div className = "welcome">
        <Grid fluid>
        <center><div className = "myJumbotron">
          <h1 className = "title_welcome">#VoluntariadosChile</h1>
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
              <center><div className = "mySpinner">
                <ClipLoader color={"#4A90E2"} size = {90} loading = {this.state.loading} />
              </div></center>  
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
                    <Button bsStyle = "primary" type = "submit" className = "btn_login">Iniciar Sesión</Button>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </Modal.Body>
        </Modal>
        </Grid>
      </div>
    );
  }
}

export default App;
