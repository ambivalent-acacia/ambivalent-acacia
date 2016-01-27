export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}
export function upvote() {
  return {
    meta: {remote: true},
    type: 'UPVOTE'
  };
}

export function downvote() {
  return {
    meta: {remote: true},
    type: 'DOWNVOTE'
  };
}

export function vote() {
  return {
    type: 'VOTE'
  };
}

export function startVote(state) {
  return {
    meta: {remote: true},
    type: 'START_VOTE',
    state
  };
}

export function stopVote() {
  return {
    meta: {remote: true},
    type: 'STOP_VOTE',
    state
  };
}
