import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import gradientLogo from "./images/golden_age_gradient.png"





class StartPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div class="row center">
      <div class="row center">

        <img  src={"./images/golden_age_gradient.png"}></img>
      </div>
      <div class="row center">
        <Link to ="/SignUp"><a class="waves-effect waves-light btn-large">sign up</a></Link>
        <a class="waves-effect waves-light btn-large">log in</a>
      </div>
        </div>


    )
  }


}


export default (StartPage)
