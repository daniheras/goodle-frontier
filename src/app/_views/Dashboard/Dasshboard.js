import React, { Component } from 'react';

//Components
import { Row, Col } from 'reactstrap';
import Card from '../../_components/card/card';
import { MdUpdate } from 'react-icons/lib/md'

import { FaBook, FaFile, FaFileText, FaThLarge, FaPercent } from 'react-icons/lib/fa';

import MiniCard from './components/mini-card.js';
import {Doughnut, Bar} from 'react-chartjs-2';


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

        const data = (canvas) => {
            const ctx = canvas.getContext("2d")
            const gradient = ctx.createLinearGradient(0,0,100,0);
            return {
                labels: ["Javascript", "React"],
                datasets: [{
                    label: 'Average notes',
                    data: [7, 9],
                    backgroundColor: [
                        'rgb(254,104,134)',
                        'rgb(87,88,157)',
                    ],
                    borderWidth: 0,
                }],
                options: {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            }
        }

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
                    <Col xs={12} md={6}>
                        <Card>
                            <div style={{padding: '1rem'}}>
                                <Doughnut data={data} />
                            </div>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <div style={{padding: '1rem'}}>
                                <Bar data={data} />
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