import React, { Component } from 'react'
import { Button, Navbar } from 'react-bootstrap'

class Welcome extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className = "welcome">
                <Navbar>
                    <Nav>
                        <NavItem eventKey = {1} style = {{float:"right"}}>
                            Iniciar Sesión
                        </NavItem>
                    </Nav>
                </Navbar>
                
            </div>
        );
    }

}

export default Welcome