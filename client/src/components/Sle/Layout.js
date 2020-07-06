import React from "react";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    fetch("/logout", {
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.logout === true) {
          this.setState({ redirect: <Redirect push to="/login" /> });
        }
      });
  }
  render() {
    return (
      <div class="everything">
        {this.state.redirect}
        <div class="line"></div>
        <div className="top-bar">
          <div class="user-box">
            <div class="user-id">
              <div class="user-name" onClick={this.logOut}>
                Log Out
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}
