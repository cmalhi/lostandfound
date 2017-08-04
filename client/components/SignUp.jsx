import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    e.preventDefault();

    axios.post('/signup', {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name,
    })
      .then((response) => {
        this.props.checkStatus();
      });
  }

  changeHandler(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <h2>SignUp</h2>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <button type="submit">SignUp</button>
        </form>
        <button onClick={this.props.toggleSignUp}>Login</button>
      </div>
    )
  }
}


export default SignUp;
