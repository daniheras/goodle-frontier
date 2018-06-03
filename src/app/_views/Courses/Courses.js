import React, {Component} from 'react';
import Recents from './_components/recents';
import MyCourses from './_components/myCourses.js';

import './Courses.scss';

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
const recently = [
  {
    id: 1,
    course: {
      name: 'JavaScript',
      image: 'https://yt3.ggpht.com/-Cg5Fj49ZlZg/AAAAAAAAAAI/AAAAAAAAAAA/rTNCQ4Rhloc/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg',
      people: 16,
      theme: 'asia',
      color: 'rgba(220,126,47,.58)'
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
      image: 'http://soyfrontend.com/wp-content/uploads/2017/06/tutoriales-de-css.jpg',
      people: 231,
      theme: 'asia',
      color: 'rgba(47,148,220,.58)'
    },
    event: {
      date: '22/05/2018',
      info: 'Exam subject 2'
    }
  },
  {
    id: 3,
    course: {
      name: 'Laravel',
      image: 'https://2.bp.blogspot.com/-yXkS3LFvqvo/WjnHC5gaoaI/AAAAAAAAHVY/j0VkVk6zbhko1GPfyCHg7DivDR6z-irsQCLcBGAs/s250-h200-c/a216-1.jpg',
      people: 16,
      theme: 'asia',
      color: 'rgba(248,105,91,.87)'
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
      <section className={'courses_view fade-in'}>
          <MyCourses courses={courses}/>
          <Recents events={recently}/>
      </section>
    )
  }
}


export default Courses;
