import React from 'react';
import PropTypes from 'prop-types';

function IncomingQuestions(props) {
  return(
    <div style={styles.main}>
      <h1>Question Queue:</h1>
      {props.threads.map(thread => {
        thread.messages.map(message => {
          return(
            <div>
              {message.body}
            </div>
          )
        })
      })}
    </div>

  );
  // console.log(props.threads);
}

IncomingQuestions.propTypes = {
  threads: PropTypes.array
};

const styles = {
  main: {
    backgroundColor: 'white',
    padding: '20px'
  }
};

export default IncomingQuestions;
