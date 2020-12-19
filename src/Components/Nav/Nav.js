import React, { Component } from 'react';
import axios from 'axios';
import homeLogo from './../../assets/home_logo.png';
import newLogo from './../../assets/new_logo.png';
import logoutLogo from './../../assets/shut_down.png';
import './Nav.css';
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser, logoutUser} from '../../ducks/reducer'
// import userEvent from '@testing-library/user-event';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
    .then(res => alert('You are logged in as'))
  }
  
  logout() {
    axios.post('/api/auth/logout')
      .then(_ => alert('You have been logged out'))
  }
  
  render() {
    console.log(this.props)
      return this.props.location.pathname !== '/' &&
        <div className='nav'>
          <div className='nav-profile-container'>
            <div className='nav-profile-pic'>
              <img className= 'nav-profile-pic' 
              src={this.props.profilePic}
              alt='profile pic'/>
            </div>
            <p>{this.props.username}</p>
          </div>
          <div className='nav-links'>
            <Link to='/dash'>
              <img className='nav-img' src={homeLogo} alt='home' />
            </Link>
            <Link to='/form'>
              <img className='nav-img' src={newLogo} alt='new post' />
            </Link>
          </div>
          <Link to='/' onClick={() => this.logout()}>
            <img className='nav-img logout' src={logoutLogo} alt='logout' />
          </Link>
        </div>
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps, {updateUser, logoutUser})(Nav));