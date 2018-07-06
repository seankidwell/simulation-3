import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {setUser} from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  changeUsername(value) {
    this.setState({ username: value });
  }

  changePassword(value) {
    this.setState({ password: value });
  }

  register = () => {
    let { username, password } = this.state;
    axios.post("/register", { username, password }).then(res => {
      this.props.setUser(
        res.data[0].id,
        res.data[0].username,
        res.data[0].profile_pic
      );
      this.props.history.push("http://localhost:3000/#/dashboard");
    });
  };

  login = () => {
    let { username, password } = this.state;
    axios.post("/login", { username, password }).then(res => {
      this.props.setUser(
        res.data[0].id,
        res.data[0].username,
        res.data[0].profile_pic
      );
      this.props.history.push("http://localhost:3000/#/dashboard");
    });
  };

  render() {
    return (
      <div>
        <div>Auth</div>
        <input
          placeholder="username"
          onChange={e => {
            this.changeUsername(e.target.value);
          }}
        />
        <input
          placeholder="password"
          onChange={e => {
            this.changePassword(e.target.value);
          }}
        />
        <br />
        <button onClick={this.register}>Register</button>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(Auth);
