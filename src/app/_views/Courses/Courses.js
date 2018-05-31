import React, {Component} from 'react';
import Recents from './_components/recents';
import MyCourses from './_components/myCourses.js';

import './Courses.scss';

const courses = [
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=1',
    people: 16,
    theme: 'asia',
    color: 'rgba(254, 107, 136, .8)'
  },
  {
    name: 'CSS',
    image: 'http://i.pravatar.cc/150?img=2',
    people: 231,
    theme: 'asia',
    color: 'rgba(73, 220, 192, .8)'
  },
]

const recently = [
  {
    id: 1,
    course: {
      name: 'JavaScript',
      image: 'http://i.pravatar.cc/150?img=1',
      people: 16,
      theme: 'asia',
      color: 'rgba(220,47,174,.58)'
    },
    event: {
      date: '22/05/2018',
      info: 'Exercise 2'
    }
  },
  {
    id: 2,
    course: {
      name: 'CSS',
      image: 'http://i.pravatar.cc/150?img=2',
      people: 231,
      theme: 'asia',
      color: 'rgba(47,220,148,.58)'
    },
    event: {
      date: '22/05/2018',
      info: 'Exam subject 2'
    }
  },
  {
    id: 3,
    course: {
      name: 'JavaScript',
      image: 'http://i.pravatar.cc/150?img=1',
      people: 16,
      theme: 'asia',
      color: 'rgba(220,47,174,.58)'
    },
    event: {
      date: '22/05/2018',
      info: 'Exercise 2'
    }
  },
  {
    id: 4,
    course: {
      name: 'CSS',
      image: 'http://i.pravatar.cc/150?img=2',
      people: 231,
      theme: 'asia',
      color: 'rgba(47,220,148,.58)'
    },
    event: {
      date: '22/05/2018',
      info: 'Exam subject 2'
    }
  },
  {
    id: 5,
    course: {
      name: 'JavaScript',
      image: 'http://i.pravatar.cc/150?img=1',
      people: 16,
      theme: 'asia',
      color: 'rgba(220,47,174,.58)'
    },
    event: {
      date: '22/05/2018',
      info: 'Exercise 2'
    }
  },
  {
    id: 6,
    course: {
      name: 'CSS',
      image: 'http://i.pravatar.cc/150?img=2',
      people: 231,
      theme: 'asia',
      color: 'rgba(47,220,148,.58)'
    },
    event: {
      date: '22/05/2018',
      info: 'Exam subject 2'
    }
  },
]


class Courses extends Component {
  render(){

    return (
      <section className={'courses_view'}>
          <div className={'courses_view__content'}>
              <MyCourses/>
          </div>
          <Recents events={recently}/>
      </section>
    )
  }
}


export default Courses;
