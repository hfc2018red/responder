import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function IncomingQuestions(props) {
  return(
    <div style={styles.main}>
      <h1>Question Queue:</h1>
      {props.threads.map(thread => {
        return thread.messages.map(message => {
          return(
            <div>
              {message.body}
              <div>
                <Button>Claim</Button>
                <Button>Cancel</Button>
              </div>
            </div>
          )
        })
      })}
    </div>
  );
}

IncomingQuestions.propTypes = {
  body: PropTypes.string
};

const styles = {
  main: {
    backgroundColor: 'white',
    padding: '20px'
  }
};

export default IncomingQuestions;
