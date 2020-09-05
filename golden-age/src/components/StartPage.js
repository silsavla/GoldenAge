import React, { Component } from 'react';
import { Link } from 'react-router-dom'





class StartPage extends Component {



  render() {
    return(
      <div class="row center">
        <h5 class="row center">This is the Start Page</h5>

        <Link to ="/PageTwo"><a class="waves-effect waves-light btn">sign up</a></Link>
        <a class="waves-effect waves-light btn">log in</a>
      </div>


    )
  }


}


export default (StartPage)
