import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Users from './Users';

class App extends React.Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  }
  
  render() {
  return (
    <div>
     <h1>Welcome</h1>

     <ul>
       <li><NavLink to='/signin'>SignIn</NavLink></li>
       <li><NavLink to='/signup'>SignUp</NavLink></li>
       <li><NavLink to='/users'>Users</NavLink></li>
       <li><button onClick={this.logout}>Logout</button></li>
     </ul>

    <main>
      <Route path='./signin' component={Signin} />
      <Route path='./signup' component={Signup} />
      <Route path='./users' component={Users} />
    </main>

    </div>
  );
}
}

export default App;
