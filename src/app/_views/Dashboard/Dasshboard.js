import React, { Component } from 'react';

import { Button } from 'reactstrap';

//Components
import { Row, Col } from 'reactstrap';
import Card from '../../_components/card/card';
import { MdUpdate } from 'react-icons/lib/md'

class Dashboard extends Component{

    render(){
        return (
            <div className={'fade-in'}>
                <h3>
                    <span><MdUpdate/></span> Recently Updated
                </h3>
                <br/>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card title={'Javascript'} time={'5m'} type={'exercise'} color={'#e67e22'}>
                            Ejercicio de Arrays
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card title={'React'} time={'today'} color={'#3498db'}>
                            Modularización
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card title={'PHP'} time={'today'} color={'#fe6b88'}>
                            Nuevo tema: Orientacion a Objetos
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card title={'MySQL'} time={'this week'} color={'#8e44ad'}>
                            Normalización de tablas
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

};

export default Dashboard;