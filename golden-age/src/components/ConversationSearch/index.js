import React from 'react';
import './ConversationSearch.css';

// TODO: add simple function that can search through list of contacts for name passed into search bar 

export default function ConversationSearch() {
    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
}
