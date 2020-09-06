
import React, { Component } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import Toolbar from '../Toolbar'
import ToolbarButton from '../ToolbarButton'
import './Messenger.css';

class Messenger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="messenger">



        <div className="scrollable sidebar">
          <ConversationList users={this.props.users} />
        </div>

        <div className="scrollable content">
          <MessageList />
        </div>
      </div>
    );
  }
}
export default Messenger
