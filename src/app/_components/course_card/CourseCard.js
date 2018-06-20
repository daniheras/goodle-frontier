import React from 'react';
import styled from 'styled-components';
import { $assets_URL } from '../../config/constants';
import {FaCalendarCheckO,FaStar, FaGroup} from 'react-icons/lib/fa';

//background: ${props => props.color};

// Estilos comunes de todos los cards
const Card = styled.div`
  border-radius: 6px;
  overflow: hidden;
  transition: .3s;
  cursor: pointer;

  &:hover{
    transform: scale(1.04);
  }

  .__card_overlay{
      position: relative;
      width: 100%;
      height: 100%;
      background: ${props => props.color};
      padding: 1rem;

      &__title{
        color: #fff;
        font-weight: 700;
        font-size: 20px;
      }
  }
`;

const CardBackground = Card.extend`
  background: url("${$assets_URL}/themes/${props => props.theme}.jpg") center;
  background-size: cover;
`;

const EventCard = CardBackground.extend`
  height: 150px;
  box-shadow: 0 0 15px ${props => props.color};

  .__card_overlay{



    &__subtitle{
      font-size: .8rem;
      color: #fff;
      width: 70%;
      max-height: 100px;
      overflow: hidden;

      &:before{
        content: '';
        font-weight: 700;
      }
    }

    &__image{
      position: absolute;
      top: 1rem;
      right: 1rem;
      border-radius: 50%;
      img{
        width: 50px;
        border-radius: 50%;
      }
    }

    &__date{
      position: absolute;
      bottom: 5px;
      right: 15px;
      color: #fff;
      font-size: .7rem;

      svg{
        font-size: .8rem;
      }
    }
  }
`;

const CoursesCard = CardBackground.extend`
  height: 100%;

  .__card_overlay{
    &__title{
      text-align: center;
      padding-top: 1rem;
      font-size: 24px;
    }

    &__image{
      text-align: center;
      padding: 1rem;

      img{
        width: 75px;
        border-radius: 50%;
      }
    }

    &__users{
      position: absolute;
      left: 15px;
      bottom: 5px;
      color: #fff;
    }

    &__fav{
      color: #fff;
      position: absolute;
      bottom: 5px;
      right: 15px;
    }
  }
`;

const MessagesCard = CardBackground.extend`
  height: 100%;

  .__card_overlay{
    &__title{
      text-align: center;
      padding-top: 1rem;
      font-size: 24px;
    }

    &__image{
      text-align: center;
      padding: 1rem;

      img{
        width: 75px;
        border-radius: 50%;
      }
    }

    &__users{
      position: absolute;
      left: 15px;
      bottom: 5px;
      color: #fff;
    }

    &__fav{
      color: #fff;
      position: absolute;
      bottom: 5px;
      right: 15px;
    }
  }
`;

const ColorCard = Card.extend`
    height: 150px;
    box-shadow: 0 0 15px ${props => props.color};
`;

const CourseTitleCard = CardBackground.extend`
  cursor: default;

  &:hover{
    transform: scale(1);
  }

  height: 100%;

  .__card_overlay{
    &__title{
      text-align: center;
      font-size: 2.4rem;
      padding: 2rem 0;
    }
  }
`;

const CourseCard = props => {
    return (
        <div style={{height: '100%'}}>
            {
              ( props.variant === 'event' ) &&
                <EventCard
                  color={props.data.course.color}
                  theme={props.data.course.theme}
                  >
                  <div className={'__card_overlay'}>
                    <div className={'__card_overlay__title'}>
                      {props.data.course.name}
                    </div>
                    <div className={'__card_overlay__subtitle'}>
                      {props.data.event.info}
                    </div>
                    <div className={'__card_overlay__image'}>
                      <img src={props.data.course.image} alt="Course Event"/>
                    </div>
                    <div className={'__card_overlay__date'}>
                      {props.data.event.date} <FaCalendarCheckO/>
                    </div>
                  </div>
                </EventCard>
            }
            {
                ( props.variant === 'void' ) &&
                <EventCard
                    color={props.data.color}
                    theme={props.data.theme}
                >
                    <div className={'__card_overlay'}>
                    </div>
                </EventCard>
            }
            {
                ( props.variant === 'color' ) &&
                <ColorCard
                    color={props.data.color}
                >
                    <div className={'__card_overlay'}>
                    </div>
                </ColorCard>
            }
            {
              ( props.variant === 'course-card' ) &&
              <CoursesCard
                color={props.data.color}
                theme={props.data.theme}
                >
                  <div className={'__card_overlay'}>
                    <div className={'__card_overlay__title'}>
                      {props.data.name}
                    </div>
                    <div className={'__card_overlay__image'}>
                      <img src={props.data.picture} alt="Course"/>
                    </div>
                    <div className={'__card_overlay__users'}>
                      <FaGroup/> {props.data.users}
                    </div>
                    {
                      ( props.data.fav ) &&
                      <div className={'__card_overlay__fav'}>
                        <FaStar/>
                      </div>
                    }
                  </div>
              </CoursesCard>
            }
            {
              ( props.variant === 'course-title' ) &&
              <CourseTitleCard
                color={props.data.color}
                theme={props.data.theme}
                >
                  <div className={'__card_overlay'}>
                    <div className={'__card_overlay__title'}>
                      {props.data.name}
                    </div>
                  </div>
              </CourseTitleCard>
            }
            {
              ( props.variant === 'message-card' ) &&
              <MessagesCard
                color={props.data.message.color}
                theme={props.data.message.theme}
                >
                  <div className={'__card_overlay'}>
                    <div className={'__card_overlay__subject'}>
                      <span>Course: </span>{props.data.message.name}
                    </div>
                    <div className={'__card_overlay__from'}>
                    <span>Subject: </span>{props.data.message.from}
                    </div>
                  </div>
              </MessagesCard>
            }
        </div>
    );
}

export default CourseCard;
