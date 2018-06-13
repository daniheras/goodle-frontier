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

const MessageCard = props => {
    return (
        <div style={{height: '100%'}}>
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
              ( props.variant === 'message-card' ) &&
              <MessagesCard
                color={props.data.message.color}
                theme={props.data.message.theme}
                >
                  <div className={'__card_overlay'}>
                    <div className={'__card_overlay__subject'}>
                      <span>Subject: </span>{props.data.message.name}
                    </div>
                    <div className={'__card_overlay__from'}>
                    <span>From: </span>{props.data.message.from}
                    </div>
                  </div>
              </MessagesCard>
            }
        </div>
    );
}

export default MessageCard;
