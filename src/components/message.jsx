import React from 'react';


const Message = (props) => {
  const date = new Date(props.message.created_at).toLocaleString();

  return (
    <div className="message">
      <h4>{props.message.author} - le {date}</h4>
      <h5>{props.message.content}</h5>
    </div>
  );
};

export default Message;
