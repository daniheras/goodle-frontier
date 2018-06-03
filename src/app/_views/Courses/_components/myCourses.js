import React from 'react';
import Overlay from '../../../_components/overlay/overlay';
import { FaBook } from 'react-icons/lib/fa';
import CourseCard from '../../../_components/course_card/CourseCard';

const MyCourses = (props) => (
  <div className={'courses_view__content fade-in'}>
    <div className={'courses_view__content__title'}>
      <Overlay color={'rgba(254, 107, 136, .6)'}>
        <h2><FaBook/> My<span className={'bold'}>Courses</span></h2>
      </Overlay>
    </div>
    <div className={'courses_view__content__my_courses'}>
      <div className={'courses_view__content__my_courses__slider'}>
        {
          props.courses.map( course => (
            <div className={'courses_view__content__my_courses__slider__card'} key={course.id}>
              <CourseCard variant={'course-card'} data={course}/>
            </div>
          ))
        }
      </div>
    </div>
    {/* <div className={'courses_view__content__title'}>
      <Overlay color={'rgba(254, 107, 136, .6)'}>
        <h2><FaBook/> Public<span className={'bold'}>Courses</span></h2>
      </Overlay>
    </div> */}
  </div>
);

export default MyCourses;
