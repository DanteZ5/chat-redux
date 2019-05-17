import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from "../actions";

class ChannelList extends Component {
   componentWillReceiveProps(nextProps) {
    console.log('here');
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }


  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.fetchMessages(channel);
  }

  render() {
    return (
      <div className="channel-list">
        <h3>Liste des channels</h3>
        <hr />
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li
                key={channel}
                onClick={() => this.handleClick(channel)}>
                  #{channel}
              </li>
              );
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
