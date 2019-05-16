import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchMessages } from "../actions";

import MessageForm from './message_form.jsx'
import Message from '../components/message.jsx';

class MessageList extends Component {


  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel)
  }

  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message) => {
          return <Message key={message.created_at} message={message} />;
        })}
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
