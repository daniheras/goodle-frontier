import React, { Component } from 'react';

//Components
import { Row, Col } from 'reactstrap';
import Card from '../../_components/card/card';
import { MdUpdate } from 'react-icons/lib/md'

import DoughnutCard from './components/doughnut-card.js';
import BarCard from './components/bar-card.js';

import { FaBook, FaFile, FaFileText, FaThLarge, FaPercent } from 'react-icons/lib/fa';

import MiniCard from './components/mini-card.js';



import { $prueba } from '../../config/constants';

import './dashboard.scss';

const cards = [
    {
        icon: <FaBook/>,
        title: 'Courses',
        body: 13
    },
    {
        icon: <FaFile/>,
        title: 'Tasks',
        body: 4
    },
    {
        icon: <FaFileText/>,
        title: 'Exams',
        body: 2
    },
    {
        icon: <FaPercent/>,
        title: 'Average',
        body: 8
    }
]

class Dashboard extends Component{

    render(){

        return (
            <div className={'fade-in'}>
                <h3>
                    <span><FaThLarge/></span> My<span className={'bold'}>Dashboard</span>
                </h3>
                <br/>
                <Row>
                {
                    cards.map( (card, key) => (
                        <MiniCard 
                            key={key}
                            title={card.title}
                            body={card.body}
                            icon={card.icon}
                        />
                    ) )
                }
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={5} xl={4}>
                        <Card>
                            <div style={{padding: '1rem'}}>
                                <DoughnutCard/>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={5} xl={4}>
                        <Card>
                            <div style={{padding: '1rem'}}>
                                <BarCard/>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

};

export default Dashboard;



/* 

    <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card title={'Javascript'} time={'5m'} type={'exercise'} color={'#f1c40f'}>
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

*/