import React, {Component, useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';


class ConversationList extends Component{
  constructor(props) {
    super(props);
  }
  render() {

    let conversations = this.props.users.map(user => {
      return {
        photo: user.doc.picture,
        name: `${user.doc.firstname} ${user.doc.lastname}`,
        text: 'Hello world! This is a long message that needs to be truncated.'

      };
    });
    return (
      <div className="conversation-list">
      
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );


  }
}
export default ConversationList
