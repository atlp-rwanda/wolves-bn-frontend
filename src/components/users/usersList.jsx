/* eslint-disable no-restricted-globals */
/* eslint-disable no-useless-concat */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userList, changeRole } from '../../redux/actions/userRole';
// import './usersRole.scss';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      role: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange=event => {
    const inputData = event.target.value.split(':', 2);
    const email = inputData[0];
    const role = inputData[1];
    this.props.changeRole(email, role);
  }

  render() {
    const message = this.props.message;
    const errors = this.props.error;

    return (
<div className="roles">
   <div>
     <h2>
       {
         message || errors
      }
    </h2>
    </div>
      <table id="customers">
   <thead>
    <tr>
      <th>#</th>
      <th>Names</th>
      <th>CreatedAt</th>
      <th>Email</th>
      <th>Role</th>
      <th>Set Role</th>
    </tr>
    </thead>
<tbody>
    {

    this.props.users.map((user) => <tr key={user.id} onChange={ this.handleChange}>

<td>{user.id}</td>
<td>{user.firstName}   {user.lastName}</td>
<td>{user.createdAt}</td>
<td>{user.email}</td>
<td>{user.role}</td>
<td><select name="role" >
  <option value="">Select Role</option>
  <option value={`${user.email}:` + 'manager'}>manager</option>
  <option value={`${user.email}:` + 'requester'}>requester</option>
</select></td>
      </tr>)
  }
      </tbody>
  </table>
  </div>
    );
  }
}
const mapStateToUsersList = ({ setRole }) => {
  const {
    message, users, user, error
  } = setRole;
  let userIndex;
  if (user) {
    if (user.id) {
      userIndex = users.findIndex(el => el.id === user.id);
      users[userIndex].role = user.role;
    }
  }
  return {
    message, users, user, error

  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(userList()),
  changeRole: (email, role) => dispatch(changeRole(email, role))

});
export default connect(mapStateToUsersList, mapDispatchToProps)(UsersList);
