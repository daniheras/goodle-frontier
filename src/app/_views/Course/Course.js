import React, { Component } from 'react';
import './Course.scss';
import axios from '../../config/axios';
import Fade from 'react-reveal/Fade';
import Overlay from '../../_components/overlay/overlay';
import { $assets_URL } from '../../config/constants';
import Card from '../../_components/course_card/CourseCard';
import { FaPlus, FaPencil, FaThumbsUp, FaArrowRight} from 'react-icons/lib/fa';
import { Snackbar } from 'material-ui';
import { Input } from 'reactstrap';
import _ from 'lodash';
import { OrbitSpinner } from 'react-epic-spinners';
import { Link } from 'react-router-dom';

import { SortablePane, Pane } from 'react-sortable-pane';
import Button from '../../_components/button/button';

class Course extends Component {

  courseId = this.props.match.params.id;

  state = {
    course: {},
    subjects: [],
    editMode: false,
    loadingEdit: false,
    task: [],
    taskIds: [],
    loading: false
  };

  componentWillMount(){
    axios.get(`/courses/${this.courseId}`)
    .then( response => {
      this.setState({
        course: response.data
      });
    });

    axios.get(`/courses/${this.courseId}/subjects`)
    .then( response => {
      this.setState({
        subjects: response.data
      });
      for (let i = 0; i < this.state.subjects.length; i++) {
        axios.get(`/courses/${this.courseId}/subjects/${this.state.subjects[i].id}/tasks`)
          .then( response => {
            let a = this.state.task;
            let ids =this.state.taskIds;
            a[this.state.subjects[i].id] = [];
            ids[this.state.subjects[i].id] = [];
            for (let j = 0; j < response.data.length; j++) {
              a[this.state.subjects[i].id][j] = response.data[j].title;
              ids[this.state.subjects[i].id][j] = response.data[j].id;
            }
            this.setState({
              task: a,
              taskIds: ids,
              loading: true
            })
          })
        }
    })


  }

  editCourse = (e) => {
    if (!this.state.editMode){
      this.setState({
        editMode: true,
      });
    } else {

      this.setState({
        loadingEdit: true,
      });

      this.state.subjects.map( (subject,i) => {
        axios.put(`/courses/${this.courseId}/subjects/${subject.id}`,this.state.subjects[i])
        .then( (response) => {
          this.setState({
            editMode: false,
            loadingEdit: false
          });
        })
      })

    }
  };

  createSubject = (e) => {

    let newSubject = {}

    if (this.state.subjects.length === 0){
      newSubject = {
        title: 'New Subject',
        order: 1
      };
    } else {
      newSubject = {
        title: 'New Subject',
        order: this.state.subjects[this.state.subjects.length - 1].order + 1,
      }
    }



    axios.post(`/courses/${this.courseId}/subjects`, newSubject)
      .then( response => {
        axios.get(`/courses/${this.courseId}/subjects`)
          .then( response => {
            this.setState({
              subjects: response.data
            });
          });
      });
    };

  createTask = (e, subjectId) => {

    const newTask = {
      title: "Nueva tarea",
      order: 1,
      finish_date: "2018-06-30 00:00:00",
      text_content: "Descripcion de tarea"
    };

    axios.post(`/courses/${this.courseId}/subjects/${subjectId}/tasks`, newTask)
      .then( () => {
        axios.get(`/courses/${this.courseId}/subjects/${subjectId}/tasks`)
          .then( response => {
            for (let i = 0; i < this.state.subjects.length; i++) {
              axios.get(`/courses/${this.courseId}/subjects/${subjectId}/tasks`)
                .then( response => {
                  let a = this.state.task;
                  let ids =this.state.taskIds;
                  a[subjectId] = [];
                  ids[subjectId] = [];
                  for (let j = 0; j < response.data.length; j++) {
                    a[subjectId][j] = response.data[j].title;
                    ids[subjectId][j] = response.data[j].id;
                  }
                  this.setState({
                    task: a,
                    taskIds: ids,
                    loading: true
                  })
                })
              }
          });
      });
  };

  handleSubjectChange = (e, iteration, subjectId, input) => {

    let inputValue = e.target.value;

    let statusCopy = Object.assign({}, this.state);

    if ( input === 'subjectName' ){
      statusCopy.subjects[iteration].title = inputValue;
    }

    if ( input === 'subjectDescription' ){
      statusCopy.subjects[iteration].description = inputValue;
    }

    // TODO PERMITIR EDITAR ESTO
    if( input === 'taskName' ){
      statusCopy.subjects[iteration].description = inputValue;
    }

    this.setState(statusCopy);
  };

  render(){

    const {match} = this.props;

    /* if(!this.state.loading) {
      return <div className="full"><OrbitSpinner color="#565aa1"/></div>;
    } */
    return (
      <Fade>
        <div className={'course-view'}>

          {
            ( this.state.course.admin ) &&
            <div>
              { (this.state.editMode) ?
                <div className="course-view__admin-button" onClick={this.editCourse}>
                  { (this.state.loadingEdit) &&
                  <OrbitSpinner color={'#49dcc0'}/>
                  }
                  <FaThumbsUp/> Save <span className='bold'>Changes</span>
                </div>
                :
                <div className="course-view__admin-button" onClick={this.editCourse}>
                  <FaPencil/> Edit <span className='bold'>Course</span>
                </div>
              }
            </div>
          }
          <Fade>
            <div className="course-view__title">
              <Card variant={'course-title'} data={this.state.course}/>
            </div>
          </Fade>

          <Fade>
            <div className="course-view__subjects">
              { this.state.subjects.map( (subject, iteration) => (
                <Fade key={subject.id}>
                  <div className="course-view__subjects__subject">
                    <div
                    className="course-view__subjects__subject__title"
                    style={
                      (iteration % 2 === 0) ? {left: '1rem'} : {right: '1rem'}
                    }
                    >
                      {subject.order}.
                      {
                        ( this.state.editMode )?
                        <Fade>
                          <input
                            className={'editable-text'}
                            type="text"
                            value={subject.title}
                            onChange={(e) => {
                              this.handleSubjectChange(e, iteration, subject.id, 'subjectName');
                            }}/>
                        </Fade>
                        :
                        <Fade>
                          <span>{subject.title}</span>
                        </Fade>
                      }
                    </div>
                    <div className="course-view__subjects__subject__description">
                      {
                        ( this.state.editMode )?
                        <Fade>
                          <textarea
                          className="course-view__subjects__subject__description__editable"
                          value={subject.description}
                          onChange={(e) => {
                            this.handleSubjectChange(e, iteration, subject.id, 'subjectDescription');
                          }}
                          />
                        </Fade>
                        :
                        <div>
                          {subject.description}
                        </div>
                      }
                    </div>
                    <div className="course-view__subjects__subject__tasks">
                        { _.map(this.state.task[subject.id], (task, iteration) => (
                          <div className="course-view__subjects__subject__tasks__task">
                            <div className="course-view__subjects__subject__tasks__task__title">
                            { 
                              (this.state.editMode) ?
                              
                              <div>
                                <input 
                                type="text" 
                                value={task}
                                onChange={(e) => {
                                  this.handleSubjectChange(e, iteration, subject.id, 'taskName');
                                }}
                                />
                                <input type="date"/>
                              </div>
                              :
                              <span>{task}</span>
                              
                            }
                            </div>
                            <Link to={`${this.props.match.params.id}/subject/${subject.id}/task/${this.state.taskIds[subject.id][iteration]}`} key='task' className="course-view__subjects__subject__tasks__task__goin">
                              <FaArrowRight/>
                            </Link>
                          </div>
                        )) }
                        {
                          ( this.state.editMode && this.state.course.admin ) &&
                          <div className="course-view__subjects__subject__tasks__create-task" onClick={(e) => this.createTask(e,subject.id)}>
                            <FaPlus/> Add task
                          </div>
                        }
                    </div>
                  </div>
                </Fade>
              )) }

              {
                ( this.state.course.admin ) &&
                <div className="course-view__subjects__create-subject" onClick={this.createSubject}>
                  <FaPlus/> Add Subject
                </div>
              }
            </div>
          </Fade>



        </div>
      </Fade>
    )
  }
}

export default Course;