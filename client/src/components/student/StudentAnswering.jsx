import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="answering">
      <button className="thumb-up"
              onClick={() => this.props.upvote()}>
      </button>
      <button className="thumb-down"
              onClick={() => this.props.downvote()}>
      </button>
    </div>;
  }
});