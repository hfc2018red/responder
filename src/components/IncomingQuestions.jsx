import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function IncomingQuestions(props) {
  console.log(props.threads);
  return(
    <div style={styles.main}>
      <h1>Question Queue:</h1>
      {props.threads.map(thread => {
        return (
          <div style={styles.thread}>
          {thread.messages.map(message => {
            return(
              <div>
              {message.creator &&
                <div style={styles.list}>
                  Response: {message.body}
                </div>
              }
              {!message.creator &&
                <div style={styles.list}>
                  Question: {message.body}
                </div>
              }
              </div>
            )
          })}
          <Button onClick={props.handleSelectThread.bind(undefined, thread.uuid)}>Claim</Button>
          </div>
        )
      })}
    </div>
  );
}

IncomingQuestions.propTypes = {
  body: PropTypes.string
};

const styles = {
  thread: {
    borderBottom: '1px solid #333',
    paddingBottom: '20px'
  },
  main: {
    backgroundColor: '#D3D3D3',
    padding: '20px',
    fontSize: '20px',
    color: 'black'
  },
  list: {
    padding: '10px',
    margin: '10px'
  }
};

export default IncomingQuestions;
