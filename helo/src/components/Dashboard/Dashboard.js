import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      myPost: true,
      listOfPosts: []
    };
  }

  changeSearch(value) {
    this.setState({ search: value });
  }

  changeMyPosts() {
    this.setState({myPosts: !this.state.myPosts})
  }

  render() {
    return (
      <div>
        <div>Dashboard</div>
        <input
          placeholder="search"
          onChange={e => this.changeSearch(e.target.value)}
        />
        <span>My Posts</span>
        <input type="checkbox" checked={this.state.myPosts} onChange={() => this.changeMyPosts()}/>
        <br/>
        <button>Search</button>
        <button>Reset</button>
      </div>
    );
  }
}
