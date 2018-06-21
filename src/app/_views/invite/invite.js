import React, {Component} from 'react';
import Input from '../../_components/input/input';
import axios from '../../config/axios';


class Invite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            info: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleinvite = this.handleinvite.bind(this);
    }

    componentWillMount() {

    }

    handleChange(e) {
        let input = this.state.Name;
        input = e.target.value;
        if (e.target.value !== '') {
            document.querySelector("label[for=" + e.target.name + "]").classList.add('top');
        } else {
            document.querySelector("label[for=" + e.target.name + "]").classList.remove('top');
        }
        this.setState({Name: input});
    }

    handleinvite(e) {
        e.preventDefault();

            let data = {
                name: this.state.Name,
                current_user: JSON.parse(sessionStorage.getItem('user')).id
            }
            axios.post(`/courses/${this.props.match.params.courseId}}/invite/${data.name}`, data)
                .then(response => {
                    console.log(response);
                    this.setState({
                        info: "User invited successfully"
                    })
                })
                .catch(error => {
                    console.log(error.response.data.Message);
                    this.setState({
                        info: error.response.data.Message
                    })

                })
    }

  render(){

    return (
        <div className={'create_task_view fade-in'}>
            <header>
                <h2>Invite user</h2>
            </header>
            <form>
                <Input type="text" class="Name" name="Name" id="Name" label="Name" handleChange={this.handleChange} value={ this.state.name }/>
                {
                    (this.state.info) && <p>{this.state.info}User invited successfully</p>
                }
                <button className="confirm-button custom-button" onClick={this.handleinvite }>Invite</button>
            </form>

        </div>
    )
  }
}


export default Invite;
