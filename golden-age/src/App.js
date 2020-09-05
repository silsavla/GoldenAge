
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import StartPage from './components/StartPage'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import Messenger from './components/Messenger/index.js'
import DBTest from './components/DBTest'
//import here

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">

              <Navbar/>
                <Switch>
                    <Route exact path="/" component={StartPage}/>
                    <Route path="/PageOne" component={Messenger}/>
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
