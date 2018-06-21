import React, { Component } from 'react';

import { FaBell } from 'react-icons/lib/fa';
import {Container, Row, Col, Form, FormGroup, Input, Label} from "reactstrap";
import CourseCard from '../../_components/course_card/CourseCard';
import axios from '../../config/axios';
import Overlay from '../../_components/overlay/overlay';
import { OrbitSpinner } from 'react-epic-spinners'

import './messages.scss';


class Messages extends Component{

    constructor(props) {
        super(props);
        this.state = {
            activeMessage: {
                id: 0,
                title: 'Select a message',
                description: '',
                accept: false
            }
        }
        this.getMessages = this.getMessages.bind(this);
    }

    componentWillMount() {
        this.getMessages();
    }

    getMessages() {
        this.setState({
            loading: true,
            activeMessage: {title: "Select a message"}
        })

        axios.get('/user/getInvitations')
            .then(response => {
                let messages = [];

                response.data.map(invitation => {
                    messages.push({
                        id: invitation[0].id,
                        message: {
                            name: invitation[0].name,
                            from: 'invitation to the course',
                            theme: invitation[0].theme,
                            color: invitation[0].color,
                        },
                        text: {
                            title: "Accept the invitation for join the course",
                            content: invitation[0].description
                        },
                        accept: true
                    });
                })

                this.setState({
                    messages: messages,
                    loading: false
                })
            })
    }

    handleSelectMessage(i) {
        let messageActive;
        Array.prototype.slice.call(document.getElementsByClassName('message')).map((message, index) => {
            if (index === i) {
                message.classList.toggle('active');
                messageActive = message.classList.contains('active') ? {
                    id: this.state.messages[i].id,
                    course: this.state.messages[i].message.name,
                    title: this.state.messages[i].text.title,
                    description: this.state.messages[i].text.content,
                    templateText: `Click on the button to accept the invitation to the course <strong>${this.state.messages[i].message.name}</strong>`,
                    accept: this.state.messages[i].accept
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
        axios.post('/courses/'+ id +'/accept_invite', JSON.stringify({current_user: JSON.parse(sessionStorage.getItem('user')).id}))
            .then(response => {
                console.log(response);
                this.getMessages()
            })
    }

    render(){
        if (this.state.loading) {
            return <div className="full"><OrbitSpinner color="#565aa1"/></div>;
        }
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
                                    (!this.state.messages.length) &&
                                        <div>No messages</div>
                                }
                                {
                                this.state.messages.map( (message, i) => (
                                    <div className={'message'} key={message.id} onClick={this.handleSelectMessage.bind(this, i)}>
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
                                <p dangerouslySetInnerHTML={{__html: this.state.activeMessage.templateText}}></p>
                                <p>{this.state.activeMessage.description ? "Course Description: " + this.state.activeMessage.description : ""}</p>
                                <div className="button-container">
                                    {(this.state.activeMessage.accept) && <button className="custom-button" onClick={this.handleAccept.bind(this, this.state.activeMessage.id)}>Accept</button>}
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