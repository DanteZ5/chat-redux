export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`).then(response => response.json());
  return {
    type: "FETCH_MESSAGES",
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { "author": author, "channel": channel, "content": content, "created_at": new Date() };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: "CREATE_MESSAGE",
    payload: {"author": author, "channel": channel, "content": content, "created_at": new Date() }
  };
}

export function selectChannel(channel) {
  // fetchMessages(channel)
  return {
    type: "SELECT_CHANNEL",
    payload: channel
  }
}
