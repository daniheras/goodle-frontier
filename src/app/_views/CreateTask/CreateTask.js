import React, {Component} from 'react';
import Input from '../../_components/input/input';
import axios from '../../config/axios';

import './CreateTask.scss';

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateTask = this.handleCreateTask.bind(this);
    }

    componentWillMount() {
        if (this.props.match.params.taskId) {
            axios.get(`/courses/${this.props.match.params.courseId}/subjects/${this.props.match.params.subjectId}/tasks/${this.props.match.params.taskId}`)
                .then( response => {
                    this.setState({
                        modify: true,
                        task: {
                            taskName: response.data.title,
                            taskDescription: response.data.text_content,
                            taskFinishDate: response.data.finish_date
                        }
                    })
                })


        }
    }

    handleChange(e) {
        let input = this.state.task;
        input[e.target.name] = e.target.value;
        if (e.target.value !== '') {
            document.querySelector("label[for=" + e.target.name + "]").classList.add('top');
        } else {
            document.querySelector("label[for=" + e.target.name + "]").classList.remove('top');
        }
        this.setState({task: input});
    }

    handleCreateTask(e) {
        e.preventDefault();

        // Modificar o crear tarea (misma vista?) se le pasa un parametro modify ? true : false

        if (this.state.modify) {
            let data = {
                current_user: JSON.parse(sessionStorage.getItem('user')).id,
                title: this.state.task.taskName,
                order: 1,
                text_content: this.state.task.taskDescription,
                finish_date: this.state.task.taskFinishDate
            }
            axios.put(`/courses/${this.props.match.params.courseId}/subjects/${this.props.match.params.subjectId}/tasks/${this.props.match.params.taskId}`, data)
                .then(response => {
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }


  render(){

    return (
        <div className={'create_task_view fade-in'}>
            <header>
                <h2>Update task</h2>
            </header>
            <form>
                <Input type="text" class="taskName" name="taskName" id="taskName" label="Task name" handleChange={this.handleChange} value={ this.state.task.taskName }/>
                <Input type="text" class="taskDescription" name="taskDescription" id="taskDescription" label="Task description" handleChange={this.handleChange} value={ this.state.task.taskDescription }/>
                <Input type="date" class="taskFinishDate active" name="taskFinishDate" id="taskFinishDate" label="Task finish date" handleChange={this.handleChange}/>

                <button className="confirm-button" onClick={this.handleCreateTask}>Confirm</button>
            </form>

        </div>
    )
  }
}


export default CreateTask;
