import React from 'react';
import MessageList from '../containers/message_list.jsx'
import ChannelList from '../containers/channel_list.jsx'


const App = () => {
  return (
    <div className="app">
      <div className="useless"></div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
