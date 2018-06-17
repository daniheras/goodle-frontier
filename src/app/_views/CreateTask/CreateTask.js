import React, {Component} from 'react';
import Input from '../../_components/input/input';

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
        this.setState({
            modify: true
        })
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
            // axios endpoint modify task
        }else {
            // axios endpoint create task
        }
    }


  render(){

    return (
        <div className={'create_task_view fade-in'}>
            <header>
                <h2>Create a task</h2>
            </header>
            <form>
                <Input type="text" class="task-name" name="task-name" id="task-name" label="Task name" handleChange={this.handleChange}/>
                <Input type="text" class="task-description" name="task-description" id="task-description" label="Task description" handleChange={this.handleChange}/>
                <Input type="date" class="task-finish-date active" name="task-finish-date" id="task-finish-date" label="Task finish date" handleChange={this.handleChange}/>

                <button className="confirm-button" onClick={this.handleCreateTask}>Confirm</button>
            </form>

        </div>
    )
  }
}


export default CreateTask;
