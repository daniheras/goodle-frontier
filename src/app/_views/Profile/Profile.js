import React, { Component } from 'react';

import { MdPerson } from 'react-icons/lib/md'


class Profile extends Component{

    componentWillMount(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({ user: user });
    }

    render(){
        return (
            <div className={'fade-in'}>
                <h3><span><MdPerson/> </span>{ this.state.user.username }'s<span className={'bold'}>Profile</span></h3>
            </div>
        )
    }

};

export default Profile;