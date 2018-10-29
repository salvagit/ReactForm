import React, { Component } from "react";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import { connect} from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }

  componentWillMount() {
    this.setState(
      { isLogged: localStorage["isLogged"] },
      () => {
        if (this.state.isLogged) this.props.redirect("/home");
        else this.props.redirect("/register");
      }
    );
  }

  render() {
    return (
      <div>
        {
          this.state.isLogged ?
            <Link to="home">home</Link>
          :
            <Link to="register">register</Link>
        }
      </div>
    );
  }
}

const mapStateTopProps = state => ({
  state
});

const mapDispatchTopProps = dispatch => ({
  redirect: url => dispatch(push(url))
});

export default connect(mapStateTopProps, mapDispatchTopProps)(App);