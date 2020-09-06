import React, { Component } from 'react';
import {addUserToDB, getDBInfo} from './DataBase'





class DBTest extends Component {

  handleClick = ()=> {
    let person = {name: 'bob', age: 72}
    //This was to quickly add fake users to DB
    // var importedData = require('./Data/users.json');
    //
    // for (var i = 0; i < importedData.users.length; i++) {
    //   addUserToDB(importedData.users[i])
    // }
    // alert("added")

    let info = getDBInfo()
    alert(info)


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


export default (DBTest)
