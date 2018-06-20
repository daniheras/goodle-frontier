import React, {Component} from 'react';
import FileDrop from 'react-file-drop';
import './Task.scss';
import axios from '../../config/axios';

class Task extends Component {

    componentWillMount() {
        this.setState({
            loading: true
        });
        //Files
        const {courseId, subjectId, taskId} = this.props.match.params;

        axios.get('courses/' + courseId + '/subjects/' + subjectId + '/tasks/' + taskId)
            .then(response => {
                const finishDate = response.data.finish_date;
                this.setState({
                    loading: false,
                    id: taskId,
                    title: response.data.title,
                    description: response.data.text_content,
                    finishDate: finishDate,
                    files: [{name: "file1.html", date: "22/22/22"}, {name: "file2.js", date: "22/22/22"}, {name: "file3.css", date: "22/22/22"}],
                    timer: this.getDiffDates(finishDate),
                    isAdmin: true // true if the user is the admin of this course
                })
            })

        // const startDate = "2018/06/17";
        // const finishDate = "2018/06/18";

    }


    getDiffDates(date2) {
        var startDate = new Date();
        var finishDate = new Date(date2);
        var timeDiff = finishDate.getTime() - startDate.getTime();

        if (timeDiff < 0) {
            return "finished";
        }
        var seconds = Math.ceil(timeDiff / (1000));

        var days = Math.floor(seconds / (3600*24));
        seconds  -= days*3600*24;
        var hours   = Math.floor(seconds / 3600);
        seconds  -= hours*3600;
        var minutes = Math.floor(seconds / 60);
        seconds  -= minutes*60;

        hours = this.fixNumber(hours);
        minutes = this.fixNumber(minutes);
        seconds = this.fixNumber(seconds)
        return {days, hours, minutes, seconds};

    }

    fixNumber(number) {
        return (number < 10 ? '0' : '') + number
    }


    handleDrop = (files, event) => {
        console.log(files, event);
    }

    handleSave() {
        return true;
    }

  render(){
      if (this.state.loading) {
        return "";
      }

      let timer;
      if (this.state.timer === 'finished') {
        timer = "Task finished"
      } else {
        timer = this.state.timer.days + " days : " + this.state.timer.hours + " hours : " + this.state.timer.minutes + " minutes : " + this.state.timer.seconds +" seconds";
      }

    return (
      <section className={'task_view fade-in'}>
        {(this.state.isAdmin) && <div className="save-task-info"><button onClick={this.handleSave}>Save</button></div>}
        <h1>{this.state.title}</h1>
        <p className="task-description" dangerouslySetInnerHTML={{__html: this.state.description}}></p>

        <div className="task-files-conatiner">
            <div className="timer">{timer}</div>
            <div  className="drag-files-container file-drop-target">
                <FileDrop onDrop={this.handleDrop}>
                    Drop files here to upload...
                </FileDrop>
            </div>
            <div className="files-container">
                <header>
                    <p>Filename</p>
                    <p>Uploaded at</p>
                </header>
                <article>
                    {(this.state.files) && this.state.files.map((file,key) => (<div className="item" key={key}><p>{file.name}</p> <p>{file.date}</p></div>))}
                    {(this.state.files.length === 0) && "No files uploaded."}
                </article>
            </div>
        </div>
    </section>
    )
  }
}


export default Task;
