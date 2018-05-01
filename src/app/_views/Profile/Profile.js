import React, { Component } from 'react';
class Profile extends Component{

    componentWillMount(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({ user: user });
    }

    render(){
        return (
            <div className={'fade-in'}>
                <h3>{ this.state.user.username }'s Profile</h3>
            </div>
        )
    }

};

export default Profile;