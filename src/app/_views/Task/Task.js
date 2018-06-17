import React, {Component} from 'react';
import FileDrop from 'react-file-drop';
import './Task.scss';

class Task extends Component {

    componentWillMount() {
        //Axios get task info with task id
        //Files
        const startDate = "2018/06/17";
        const finishDate = "2018/06/18";

        this.setState({
            id: this.props.match.params.id,
            title: "task title",
            description: "Realiza una página html y un script en Javascript para calcular el área de un triángulo. <br>La base y la altura se las solicitarás al usuario. Realiza control de errores de la entrada.<br>El usuario puede introducir números positivos con decimales.<br>Area=(Base*Altura)/2. Muestra el resultado al usuario.",
            startDate: startDate,
            finishDate: finishDate,
            files: [{name: "file1.html", date: "22/22/22"}, {name: "file2.js", date: "22/22/22"}, {name: "file3.css", date: "22/22/22"}],
            timer: this.getDiffDates(startDate, finishDate),
            isAdmin: true // true if the user is the admin of this course
        })
    }


    getDiffDates(date1, date2) {
        var startDate = new Date(date1);
        var finishDate = new Date(date2);
        var timeDiff = Math.abs(finishDate.getTime() - startDate.getTime());
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

    return (
      <section className={'task_view fade-in'}>
        {(this.state.isAdmin) && <div className="save-task-info"><button onClick={this.handleSave}>Save</button></div>}
        <h1>{this.state.title}</h1>
        <p className="task-description" dangerouslySetInnerHTML={{__html: this.state.description}}></p>

        <div className="task-files-conatiner">
            <div className="timer">
                {this.state.timer.days} days : {this.state.timer.hours} hours : {this.state.timer.minutes} minutes : {this.state.timer.seconds} seconds
            </div>
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
