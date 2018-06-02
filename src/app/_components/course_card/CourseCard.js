import React from 'react';
import styled from 'styled-components';
import { $assets_URL } from '../../config/constants';
import {FaCalendarCheckO,FaStar, FaGroup} from 'react-icons/lib/fa';

//background: ${props => props.color};

// Estilos comunes de todos los cards
const Card = styled.div`
  background: url("${$assets_URL}/themes/asia/background.png") center;
  background-size: cover;
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

const EventCard = Card.extend`
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
        content: 'New task: ';
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

const CoursesCard = Card.extend`
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
              ( props.variant === 'course-card' ) &&
              <CoursesCard
                color={props.data.course.color}
                theme={props.data.course.theme}
                >
                  <div className={'__card_overlay'}>
                    <div className={'__card_overlay__title'}>
                      {props.data.course.name}
                    </div>
                    <div className={'__card_overlay__image'}>
                      <img src={props.data.course.image} alt="Course"/>
                    </div>
                    <div className={'__card_overlay__users'}>
                      <FaGroup/> {props.data.course.users}
                    </div>
                    {
                      ( props.data.course.fav ) &&
                      <div className={'__card_overlay__fav'}>
                        <FaStar/>
                      </div>
                    }
                  </div>
              </CoursesCard>
            }
        </div>
    );
}

export default CourseCard;
