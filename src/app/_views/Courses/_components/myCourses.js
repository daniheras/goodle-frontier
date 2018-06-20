import React from 'react';
import Overlay from '../../../_components/overlay/overlay';
import { FaBook, FaPlus } from 'react-icons/lib/fa';
import CourseCard from '../../../_components/course_card/CourseCard';
import Button from '../../../_components/button/button';
import { colors } from '../../../config/customization';
import { Link } from 'react-router-dom';

const MyCourses = (props, match) => (
  <div className={'courses_view__content fade-in'}>
    <div className={'courses_view__content__title'}>
      <Overlay color={'rgba(254, 107, 136, .6)'}>
        <h2><FaBook/> My<span className={'bold'}>Courses</span></h2>
      </Overlay>
    </div>
    <div className={'courses_view__content__manage_bar'}>
      <Link to={'/app/courses/create'}>Create new course</Link>
    </div>
    <div className={'courses_view__content__settings_bar'}>
      Order by:
        <ul>
            <li>
                <a href="#Updated">Updated date</a>
            </li>
            <li>
                <a href="#Favs">Favourites</a>
            </li>
        </ul>
        <hr/>
    </div>
    <div className={'courses_view__content__my_courses'}>
      <div className={'courses_view__content__my_courses__slider'}>
        {
          props.courses.map( course => (
            <div className={'courses_view__content__my_courses__slider__card'} key={course.id}>
              <Link to={`${props.match.url}/${course.id}`}>
                <CourseCard variant={'course-card'} data={course}/>
              </Link>
            </div>
          ))
        }
      </div>
    </div>  
  </div>
);

export default MyCourses;
