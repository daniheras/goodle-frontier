import React from 'react';
import styled from 'styled-components';
import { $assets_URL } from '../../config/constants';
import {FaCalendarCheckO} from 'react-icons/lib/fa';

//background: ${props => props.color};

const Card = styled.div`
  background: url("${$assets_URL}/themes/asia/background.png") center;
  background-size: cover;
  border-radius: 6px;
  height: 150px;
  overflow: hidden;
  box-shadow: 0 0 15px ${props => props.color};

  .__card_overlay{
    position: relative;
    width: 100%;
    height: 100%;
    background: ${props => props.color};
    padding: 1rem;

    &__title{
      color: white;
      font-weight: 700;
      font-size: 20px;
    }

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

const EventCard = styled.div`

`;


const CourseCard = props => {
    return (
        <div>
          <Card
            color={props.data.course.color}
            theme={props.data.course.theme}
            >
            {
              ( props.variant === 'event' ) &&
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
            }
          </Card>
        </div>
    );
}

export default CourseCard;
