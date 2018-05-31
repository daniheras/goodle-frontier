import React, {Component} from 'react';

//import CourseList from '../../_components/courseList/courseList';
import './Courses.scss';
import axios from '../../config/axios';
import { Link } from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import { FaCalendarCheckO } from 'react-icons/lib/fa';
import Slider from "./_components/myCoursesCarousell";

const courses = [
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=1'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=2'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=3'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=4'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=5'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=6'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=7'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=8'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=9'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=10'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=11'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=12'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=13'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=14'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=15'
  },
  {
    name: 'JavaScript',
    image: 'http://i.pravatar.cc/150?img=16'
  },
]


class Courses extends Component {
  render(){

    return (
      <div className={'courses'}>
        <Slider courses={courses}/>
        <div className={'courses__body'}>
          <div className={'courses__body__title'}>
            <h2>
              My <span className={'bold'}>Courses</span>
            </h2>
          </div>
          <div className={'courses__body__carousell'}>

          </div>
        </div>
        <aside className={'courses__recents'}>

        </aside>
      </div>
    )
  }
}


//
// const recentlyUpdates = [
//   {
//     name: 'Law',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/law.svg',
//     date: '20 / 05 / 2018',
//     content: 'New exam: 18/06/2018'
//   },
//   {
//     name: 'JavaScript',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/scholarship.svg',
//     date: '18 / 05 / 2018',
//     content: 'New task: Exercise 2 of "variables"'
//   },
//   {
//     name: 'HTML and CSS',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/workspace.svg',
//     date: '17 / 05 / 2018',
//     content: 'New task: Exercise 4 of "positioning"'
//   },
//   {
//     name: 'Law',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/law.svg',
//     date: '20 / 05 / 2018',
//     content: 'New exam: 18/06/2018'
//   },
//   {
//     name: 'JavaScript',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/scholarship.svg',
//     date: '18 / 05 / 2018',
//     content: 'New task: Exercise 2 of "variables"'
//   },
//   {
//     name: 'HTML and CSS',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/workspace.svg',
//     date: '17 / 05 / 2018',
//     content: 'New task: Exercise 4 of "positioning"'
//   },
//   {
//     name: 'Law',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/law.svg',
//     date: '20 / 05 / 2018',
//     content: 'New exam: 18/06/2018'
//   },
//   {
//     name: 'JavaScript',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/scholarship.svg',
//     date: '18 / 05 / 2018',
//     content: 'New task: Exercise 2 of "variables"'
//   },
//   {
//     name: 'HTML and CSS',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/workspace.svg',
//     date: '17 / 05 / 2018',
//     content: 'New task: Exercise 4 of "positioning"'
//   },
//   {
//     name: 'Law',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/law.svg',
//     date: '20 / 05 / 2018',
//     content: 'New exam: 18/06/2018'
//   },
//   {
//     name: 'JavaScript',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/scholarship.svg',
//     date: '18 / 05 / 2018',
//     content: 'New task: Exercise 2 of "variables"'
//   },
//   {
//     name: 'HTML and CSS',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/workspace.svg',
//     date: '17 / 05 / 2018',
//     content: 'New task: Exercise 4 of "positioning"'
//   },
//   {
//     name: 'Law',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/law.svg',
//     date: '20 / 05 / 2018',
//     content: 'New exam: 18/06/2018'
//   },
//   {
//     name: 'JavaScript',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/scholarship.svg',
//     date: '18 / 05 / 2018',
//     content: 'New task: Exercise 2 of "variables"'
//   },
//   {
//     name: 'HTML and CSS',
//     icon: 'https://goodle.ams3.digitaloceanspaces.com/icons/education/workspace.svg',
//     date: '17 / 05 / 2018',
//     content: 'New task: Exercise 4 of "positioning"'
//   },
// ]
//
// class Courses extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             userCourses: []
//         }
//     }
//     componentWillMount() {
//         axios.get('/courses/user')
//             .then(res => {
//                 this.setState({
//                     userCourses: res.data.user_courses,
//                 })
//             })
//     }
//     render(){
//         return (
//             <Row noGutters>
//               <Col xs={12} sm={12} md={12} xl={10}>
//                 <div className={"courses"}>
//                   <nav className={"courses__menu"}>
//                     Menu
//                   </nav>
//                 </div>
//               </Col>
//               <Col xs={12} sm={12} md={12} xl={2}>
//                 <aside className={"recently_updated .d-none"}>
//                   <header className={"recently_updated__title"}>
//                     Last <span className={"bold"}>Updates</span>
//                   </header>
//                   {
//                     recentlyUpdates.map( (update, key) => (
//                       <div>
//                         {
//                           (key === 4) &&
//                           <header className={"recently_updated__title"}>
//                             Last <span className={"bold"}>Week</span>
//                           </header>
//                         }
//                         <div style={{padding: '.5rem'}} key={key}>
//                           <div className={"recently_updated__card"}>
//                             <div className={"recently_updated__card__date"}>
//                               <div className={'_icon'}>
//                                 <FaCalendarCheckO/>
//                               </div>
//                               <div className={'_date'}>
//                                 {update.date}
//                               </div>
//                               <div className={'_course_name'}>
//                                 <a href="#Course">{update.name}</a>
//                               </div>
//                             </div>
//                             <div className={'__course_content'}>
//                               <div className={'__pic'}>
//                                 <img src={update.icon} alt=""/>
//                               </div>
//                               <div className={'__content'}>
//                                 {update.content}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   }
//
//                 </aside>
//               </Col>
//             </Row>
//         )
//     }
//
// }

export default Courses;
