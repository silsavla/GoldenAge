import React, { Component } from 'react';
import { Link } from 'react-router-dom'





class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users,
      person: {},
      txt: "yo"

    }

    this.handleClick = this.handleClick.bind(this);
  }


//need to get all info
  handleClick = ()=> {
    var firstname = document.getElementById("firstNameInput").value;
    var lastname = document.getElementById("lastNameInput").value;
    var email = document.getElementById("email").value;
    var userPersonName = email
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var interests = document.getElementById("interests").value.split(',');
    var picture = "https://randomuser.me/api/portraits/thumb/men/75.jpg"

    var user = {}
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.userPersonName = userPersonName;
    user.password = password;
    user.gender = gender;
    user.age = age;
    user.interests = interests;
    user.picture = picture;

    this.setState({person: user})



  }




  render() {
    return(
      <div className="container">
      <div class="row">
                    <form class="col s12">
                      <div class="row">


                        <div class="input-field col s6">
                          <input id="firstNameInput" type="text" class="validate"></input>

                          <label for="firstNameInput" class="active">Enter First Name</label>

                        </div>
                        <div class="input-field col s6">

                          <input id="lastNameInput" type="text" class="validate"></input>
                          <label for="lastNameInput" class="active">Enter Last Name</label>
                        </div>
                      </div>



                      <div class="row">


                        <div class="input-field col s6">
                          <input id="email" type="email" class="validate"></input>

                          <label for="email" class="active">Enter Email</label>

                        </div>
                        <div class="input-field col s6">

                          <input id="password" type="password" class="validate"></input>
                          <label for="password" class="active">Create a Password</label>
                        </div>
                      </div>



                      <div class="row">


                        <div class="input-field col s6">
                          <input id="gender" type="text" class="validate"></input>

                          <label for="gender" class="active">What is your gender</label>

                        </div>
                        <div class="input-field col s6">
                          <input id="age" type="text" class="validate"></input>

                          <label for="age" class="active">What is your age</label>

                        </div>

                      </div>



                      <div class="row">


                        <div class="input-field col s12">
                          <input id="interests" type="text" class="validate"></input>

                          <label for="interests" class="active">Enter a comma separated list of your interests</label>

                        </div>

                      </div>



                    </form>
                    <a class="waves-effect waves-light btn" onClick={()=>this.handleClick()}>Validate</a>


                    <Link to={{ pathname: '/PageTwo', state: {obj: this.state}}} >

                      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                      </button>
                      </Link>

                  </div>


      </div>


    )
  }


}


export default (SignUp)
