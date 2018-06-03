import React from 'react';
import {FaRefresh} from 'react-icons/lib/fa';

import EventCard from '../../../_components/course_card/CourseCard';

const Recents = (props) => (
  <div className={'recents_sidebar'}>
    <div className={'recents_sidebar__header'}>
      <h3><FaRefresh/> Recently<span className={'bold'}>Updated</span></h3>
    </div>
    <div className={'recents_sidebar__events'}>
      {
        props.events.map( event => (
          <div key={event.id} className={'recents_sidebar__events__event_wrapper'}>
            <EventCard variant={'event'} data={event}/>
          </div>
        ))
      }
    </div>
  </div>
);

export default Recents;
