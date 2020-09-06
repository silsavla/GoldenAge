
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import StartPage from './components/StartPage'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import Messenger from './components/Messenger/index.js'
import DBTest from './components/DBTest'
import PouchDB from 'pouchdb-browser'
import {addUserToDB, getDBInfo, db, remoteDB} from './components/DataBase'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  componentWillUnmount() {
    this.canceler.cancel();
  }

  componentDidMount() {
    this.fetchData();
    db.sync(remoteDB, {live: true}).on('complete', () => {
      this.fetchData();
    }).on('error', function(err) {
      //if error
      console.log(err);
    });
    this.canceler = db.changes({
      since: 'now',
      live: true,
      include_docs: true
    }).on('change', () => {
      this.fetchData();
    });
  }

  fetchData = () => {
    this.setState({
      loading: true,
      users: []
    });
    db.allDocs({
      include_docs: true
    }).then(result => {
      //handle result
      let userList = [];


      for (var item in result.rows) {
        userList.push(result.rows[item]);
      }

      this.setState({users: userList, loading: false});
    }).catch((err) => {
      console.log(err)
    });
  }



  render() {

    if (this.state.loading || this.state.data === null) {
      return(<p></p>);
    }
    //alert(this.state.users[0].doc.firstname)
    return (
       <BrowserRouter>
            <div className="App">

              <Navbar/>
                <Switch>
                    <Route exact path="/" render={() => <StartPage txt ={this.state.users.length}/>} />
                    <Route path="/PageOne" render={() => <Messenger  users ={this.state.users}/>}/>
                    <Route path="/PageTwo" component={PageTwo}/>
                    <Route path="/PageThree" component={PageThree}/>
                    <Route path="/DBTest" component={DBTest}/>

                </Switch>
             </div>
       </BrowserRouter>

    );
  }
}

export default App;
