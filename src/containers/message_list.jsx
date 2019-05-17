import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchMessages } from "../actions";

import MessageForm from './message_form.jsx'
import Message from '../components/message.jsx';

class MessageList extends Component {
  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentWillMount() {
    this.fetchMessages();
  }


  // componentDidMount() {
  //   this.refresher = setInterval(this.fetchMessages, 5000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.refresher)
  // }

  render() {
    // console.log('I render');
    return (
      <div className="message-list">
        <h3>Channel : {this.props.selectedChannel}</h3>
        <hr />
        <div className="channel-content">
          {this.props.messages.map((message) => {
            return <Message key={message.created_at} message={message} />;
          })}
        </div>
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
