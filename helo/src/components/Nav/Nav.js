import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
  console.log(props);
  return (
    <div>
      <div>Nav</div>
      <Link to='/dashboard'><button>Home</button></Link>
      <Link to='/new'><button>New Post</button></Link>
      <Link to='/'><button>Logout</button></Link>
      {props.profilePicture}
      <br/>
      {props.username}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    username: state.username,
    profilePicture: state.profilePicture
  }
}

export default connect(mapStateToProps)(Nav)