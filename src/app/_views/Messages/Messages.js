import React, { Component } from 'react';

import { FaBell } from 'react-icons/lib/fa';
import {Container, Row, Col, Form, FormGroup, Input, Label} from "reactstrap";
import CourseCard from '../../_components/course_card/CourseCard';


import Overlay from '../../_components/overlay/overlay';



import './messages.scss';

const messages = [
    {
      id: 1,
      message: {
        name: 'JavaScript',
        from: 'jose@jose.com  |  JavaScript for dummies',
        theme: 'forest',
        color: 'rgba(86,90,161,0.58)',
      },
      text: {
        title: "1 Title",
        content: "1 Buenos días, Os recuerdo que este jueves 31 de mayo tenéis que asistir al IES a las 8:30 para seguimiento de FCT y revisión de proyectos. Tenéis que traer las hojas de actividades de las semanas del 14 al 18 de mayo y del 21 al 25 de mayo. Paco y yo os revisaremos lo que figura en la plantilla de seguimiento número 3 que tenéis disponible en el aula virtual. A las 12:00 asistiremos a la charla de másteres gratuitos de Microsoft de Juan Bou y a las 13:00 Prado os informará sobre la bolsa de empleo. Os he incluido a los que no estáis en FCT pues las charlas pueden ser de vuestro interés."
      },
      accept: true
    },
    {
      id: 2,
      message: {
        name: 'CSS',
        from: 'jose@jose.com  |  JavaScript for dummies',
        theme: 'city',
        color: 'rgba(86,90,161,0.58)',
      },
      text: {
        title: "2 Title",
        content: "2 Buenos días, Os recuerdo que este jueves 31 de mayo tenéis que asistir al IES a las 8:30 para seguimiento de FCT y revisión de proyectos. Tenéis que traer las hojas de actividades de las semanas del 14 al 18 de mayo y del 21 al 25 de mayo. Paco y yo os revisaremos lo que figura en la plantilla de seguimiento número 3 que tenéis disponible en el aula virtual. A las 12:00 asistiremos a la charla de másteres gratuitos de Microsoft de Juan Bou y a las 13:00 Prado os informará sobre la bolsa de empleo. Os he incluido a los que no estáis en FCT pues las charlas pueden ser de vuestro interés."
      },
      accept: false
    },
    {
      id: 3,
      message: {
        name: 'Laravel',
        from: 'jose@jose.com  |  JavaScript for dummies',
        theme: 'forest',
        color: 'rgba(86,90,161,0.58)',
      },
      text: {
        title: "3 Title",
        content: "3 Buenos días, Os recuerdo que este jueves 31 de mayo tenéis que asistir al IES a las 8:30 para seguimiento de FCT y revisión de proyectos. Tenéis que traer las hojas de actividades de las semanas del 14 al 18 de mayo y del 21 al 25 de mayo. Paco y yo os revisaremos lo que figura en la plantilla de seguimiento número 3 que tenéis disponible en el aula virtual. A las 12:00 asistiremos a la charla de másteres gratuitos de Microsoft de Juan Bou y a las 13:00 Prado os informará sobre la bolsa de empleo. Os he incluido a los que no estáis en FCT pues las charlas pueden ser de vuestro interés."
      },
      accept: true
    },
    {
      id: 4,
      message: {
        name: 'CSS',
        from: 'jose@jose.com  |  JavaScript for dummies',
        theme: 'city',
        color: 'rgba(86,90,161,0.58)',
      },
      text: {
        title: "4 Title",
        content: "4 Buenos días, Os recuerdo que este jueves 31 de mayo tenéis que asistir al IES a las 8:30 para seguimiento de FCT y revisión de proyectos. Tenéis que traer las hojas de actividades de las semanas del 14 al 18 de mayo y del 21 al 25 de mayo. Paco y yo os revisaremos lo que figura en la plantilla de seguimiento número 3 que tenéis disponible en el aula virtual. A las 12:00 asistiremos a la charla de másteres gratuitos de Microsoft de Juan Bou y a las 13:00 Prado os informará sobre la bolsa de empleo. Os he incluido a los que no estáis en FCT pues las charlas pueden ser de vuestro interés."
      },
      accept: false
    },
    {
      id: 5,
      message: {
        name: 'Laravel',
        from: 'jose@jose.com  |  JavaScript for dummies',
        theme: 'forest',
        color: 'rgba(86,90,161,0.58)',
      },
      text: {
        title: "5 Title",
        content: "5 Buenos días, Os recuerdo que este jueves 31 de mayo tenéis que asistir al IES a las 8:30 para seguimiento de FCT y revisión de proyectos. Tenéis que traer las hojas de actividades de las semanas del 14 al 18 de mayo y del 21 al 25 de mayo. Paco y yo os revisaremos lo que figura en la plantilla de seguimiento número 3 que tenéis disponible en el aula virtual. A las 12:00 asistiremos a la charla de másteres gratuitos de Microsoft de Juan Bou y a las 13:00 Prado os informará sobre la bolsa de empleo. Os he incluido a los que no estáis en FCT pues las charlas pueden ser de vuestro interés."
      },
      accept: true
    },
    {
      id: 6,
      message: {
        name: 'Macramé',
        from: 'jose@jose.com  |  JavaScript for dummies',
        theme: 'forest',
        color: 'rgba(86,90,161,0.58)',
      },
      text: {
        title: "6 Title",
        content: "6 Buenos días, Os recuerdo que este jueves 31 de mayo tenéis que asistir al IES a las 8:30 para seguimiento de FCT y revisión de proyectos. Tenéis que traer las hojas de actividades de las semanas del 14 al 18 de mayo y del 21 al 25 de mayo. Paco y yo os revisaremos lo que figura en la plantilla de seguimiento número 3 que tenéis disponible en el aula virtual. A las 12:00 asistiremos a la charla de másteres gratuitos de Microsoft de Juan Bou y a las 13:00 Prado os informará sobre la bolsa de empleo. Os he incluido a los que no estáis en FCT pues las charlas pueden ser de vuestro interés."
      },
      accept: true
    },
  ]

class Messages extends Component{

    constructor(props) {
        super(props);
        this.state = {
            activeMessage: {
                id: 0,
                title: 'Select a message',
                content: '',
                accept: false
            }
        }
    }

    handleSelectMessage(i) {
        let messageActive;
        Array.prototype.slice.call(document.getElementsByClassName('message')).map((message, index) => {
            if (index === i) {
                message.classList.toggle('active');
                messageActive = message.classList.contains('active') ? {
                    id: i,
                    title: messages[i].text.title,
                    content: messages[i].text.content,
                    accept: messages[i].accept
                } : { title: "Select a message" };
            } else {
                message.classList.remove('active');
            }
        })

        this.setState({
            activeMessage: messageActive
        })
    }

    handleAccept(id) {
        console.log("AXIOS: Accept invitation " + id);

    }

    render(){
        return (
            <div className={'fade-in'}>
                <Container>
                    <Row>
                        <Col className={'messages_container'} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <header>
                                <Overlay color={'rgba(254, 107, 136, .6)'}>
                                </Overlay>
                                <h1>Messages</h1>
                            </header>
                            <div className="messages">
                                {
                                messages.map( (message, i) => (
                                    <div className={'message'} key={message.id} onClick={this.handleSelectMessage.bind(this, i)}> {/*TODO: pass id message*/}
                                        <CourseCard variant={'message-card'} data={message}/>
                                    </div>
                                ))
                                }
                            </div>
                        </Col>

                        <Col className="message_text" xs={12} sm={12} md={8} lg={8} xl={8}>
                            <header>
                                <h2 className="subject">{this.state.activeMessage.title}</h2>
                            </header>
                            <article>
                                <p>{this.state.activeMessage.content}</p>
                                <div className="button-container">
                                    {(this.state.activeMessage.accept) && <button onClick={this.handleAccept.bind(this, this.state.activeMessage.id)}>Accept</button>}
                                </div>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

};

export default Messages;