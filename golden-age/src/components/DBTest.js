import React, { Component } from 'react';
import {addUserToDB} from './DataBase'





class PageThree extends Component {

  handleClick = ()=> {
    let person = {name: 'bob', age: 72}
    addUserToDB(person)
    alert("added")
  }


  render() {
    //using for DB test
    return(
      <div>
        <a class="waves-effect waves-light btn" onClick={()=>this.handleClick()}>push user</a>

      </div>

    )
  }


}


export default (PageThree)
