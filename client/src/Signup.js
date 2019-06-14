import React from 'react';
import api from './helpers/api';

class Signup extends React.Component {
    render() {
        return (
            <>
                <h3> Signup </h3> 
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='fullname' placeholder='Full Name' onChange=
                    {this.handleChange} value={this.state.fullname} />
                    <input type='text' name='username' placeholder='Username' onChange=
                    {this.handleChange} value={this.state.username} /> 
                    <input type='password' name='password' placeholder='Password' onChange=
                    {this.handleChange} value={this.state.fullname} />   
                    <button type='submit'>Register</button>
                </form>          
            </>
        )
    }
}

export default Signup

