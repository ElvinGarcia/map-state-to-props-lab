import React, { Component } from 'react';
import {connect} from 'react-redux'



class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user,i) => <li key={i}>{user.username} | {user.hometown} </li> )}
          <br/>
          Total:
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state)=> {
  return({ users: state.users, userCount: state.users.length});
}


export default connect(mapStateToProps)(Users)
