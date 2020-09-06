import React, { Component } from 'react';

import { Link } from 'react-router-dom'




class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.location.state.obj.users,
      newUser: this.props.location.state.obj.person
    }
  }
  render() {
    let cardList = this.state.users.map(item => {
      let interests = item.doc.interests.map(i => {
        return(<li>{i}</li>)
      })
      return(
        <div class="col s12 m7">
        <div className='card' key ={item.doc._id}>
          <div className='card-image'>
            <img src={item.doc.picture} width="100" alt={"pic"}/>
            <span className='card-title'>{item.doc.firstname}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div className="card-content">
            <p>Age: {item.doc.dob.age}</p>
            <p>Interests:</p>
            <ul>
            {interests}
            </ul>
            </div>
          </div>
        </div>
      )
    })

    return(
      <div class="row center">
        <h5 class="row center">Let's Make Some Friends</h5>
        <Link to ="/Messenger"><a class="waves-effect waves-light btn">I'm Set</a> </Link>
        {cardList}

      </div>
    )
  }


}


export default (PageTwo)
