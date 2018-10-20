import React from 'react';
import PropTypes from 'prop-types';

function Response() {
  return(
    <div style={styles.main}>
      <h1> This will be userQuestion variable.</h1>
      <h3>Thank you for your question and we can suggest the following to help: </h3>

      <textarea style={styles.textarea}>
        Please type your chat, information or answer here.
      </textarea>
      <p>Please include helpful links.</p>

      <textarea style={styles.textarea}>
        Please type your chat, information or answer here.
      </textarea>
    </div>
  )
}

const styles = {
  main: {
    backgroundColor: '#C0D6DF',
    padding: '20px',
    border: '2px solid black'
  },
  textarea: {
    width: '500px',
    height: '400px',
    border: '5px solid gray',
    fontSize: '20px',
    padding: '5px'
  }
};

export default Response;
