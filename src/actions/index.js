export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`).then(response => response.json());
  console.log(promise);
  return {
    type: "FETCH_MESSAGES",
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  return {
    type: "CREATE_MESSAGE",
    payload: {"author": author, "channel": channel, "content": content, "created_at": new Date() }
  };
}
