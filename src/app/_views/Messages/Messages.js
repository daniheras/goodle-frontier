import React, { Component } from 'react';

import { FaBell } from 'react-icons/lib/fa';
import {Row, Col, Form, FormGroup, Input, Label} from "reactstrap";
import CourseCard from '../../_components/course_card/CourseCard';


import Overlay from '../../_components/overlay/overlay';



import './messages.scss';

const courses = [
    {
      id: 1,
      course: {
        name: 'JavaScript',
        image: 'https://yt3.ggpht.com/-Cg5Fj49ZlZg/AAAAAAAAAAI/AAAAAAAAAAA/rTNCQ4Rhloc/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg',
        users: 16,
        theme: 'asia',
        color: 'rgba(220,126,47,.58)',
        fav: true
      }
    },
    {
      id: 2,
      course: {
        name: 'CSS',
        image: 'http://soyfrontend.com/wp-content/uploads/2017/06/tutoriales-de-css.jpg',
        users: 231,
        theme: 'asia',
        color: 'rgba(47,148,220,.58)',
        fav: false
      }
    },
    {
      id: 3,
      course: {
        name: 'Laravel',
        image: 'https://2.bp.blogspot.com/-yXkS3LFvqvo/WjnHC5gaoaI/AAAAAAAAHVY/j0VkVk6zbhko1GPfyCHg7DivDR6z-irsQCLcBGAs/s250-h200-c/a216-1.jpg',
        users: 16,
        theme: 'asia',
        color: 'rgba(248,105,91,.87)',
        fav: false
      }
    },
    {
      id: 4,
      course: {
        name: 'CSS',
        image: 'http://soyfrontend.com/wp-content/uploads/2017/06/tutoriales-de-css.jpg',
        users: 231,
        theme: 'asia',
        color: 'rgba(47,148,220,.58)',
        fav: false
      }
    },
    {
      id: 5,
      course: {
        name: 'Laravel',
        image: 'http://i.pravatar.cc/150?img=1',
        users: 16,
        theme: 'asia',
        color: 'rgba(248,105,91,.87)',
        fav: false
      }
    },
    {
      id: 6,
      course: {
        name: 'Macramé',
        image: 'http://soyfrontend.com/wp-content/uploads/2017/06/tutoriales-de-css.jpg',
        users: 231,
        theme: 'asia',
        color: 'rgba(220,47,174,.58)',
        fav: false
      }
    },
  ]

class Messages extends Component{

    componentWillMount(){
    }


    render(){
        return (
            <div className={'fade-in'}>
                <Row>
                    <Col className={'messages_container'} xs={12} sm={12} md={4} lg={4} xl={4}>
                        <header>
                            <Overlay color={'rgba(254, 107, 136, .6)'}>
                            </Overlay>
                            <h1>Messages</h1>
                        </header>
                        <div className="messages">
                            {
                            courses.map( course => (
                                <div className={'message'} key={course.id}>
                                    <CourseCard variant={'course-card'} data={course}/>
                                </div>
                            ))
                            }
                        </div>
                    </Col>

                    <Col className="message_text" xs={12} sm={12} md={8} lg={8} xl={8}>
                        <header>
                            <h2 className="subject">Asistencia al aula el dia 31</h2>
                        </header>
                        <p>Buenos días,

                            Os recuerdo que este jueves 31 de mayo tenéis que asistir al IES a las 8:30 para seguimiento de
                            FCT y revisión de proyectos.
                            Tenéis que traer las hojas de actividades de las semanas del 14 al 18 de mayo
                            y del 21 al 25 de mayo.
                            Paco y yo os revisaremos lo que figura en la plantilla de seguimiento número 3 que tenéis
                            disponible en el aula virtual.
                            A las 12:00 asistiremos a la charla de másteres gratuitos de Microsoft de Juan Bou y a las
                            13:00 Prado os informará sobre la bolsa de empleo.
                            Os he incluido a los que no estáis en FCT pues las charlas pueden ser de vuestro interés.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }

};

export default Messages;