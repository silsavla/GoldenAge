import React from 'react';
import './Compose.css';

// TODO: take message from field and add it to the corresponding conversation array

export default function Compose(props) {
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        />

        {
          props.rightItems
        }
      </div>
    );
}
