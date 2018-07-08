import React, { Component } from 'react'
import {Table, Grid, Row, Col} from 'react-bootstrap'
import './myVolunteers.css'
class myVolunteers extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className = "wrapper">
                <Grid fluid>
                    <Col lg = {12} md = {12}>
                        <Table hover style = {{marginTop:27 + 'px'}}>
                            <thead className = "headerTable">
                                <tr>
                                    <th>#</th>
                                    <th>Voluntariados</th>
                                    <th>Región</th>
                                    <th>Comuna</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Reconstrucción bosque</td>
                                    <td>Valparaíso</td>
                                    <td>Las Cruces</td>
                                    <td>2018-08-07</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default myVolunteers;