import React from 'react';
import PropTypes from 'prop-types';

function Response(props) {
  return(
    <div>
      <h1> This will be userQuestion variable.</h1>
      <h3>Thank you for your question and we can suggest the following to help: </h3>
      <form>
        <textarea value={props.message} onChange={props.handleUpdate} style={styles.textarea}>
          Please type your chat, information or answer here.
        </textarea>
	<button onClick={props.handleSubmit}>Send</button>
      </form>
      <button style={styles.button} type='submit'>Send</button>
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
  },
  button: {
    fontSize: '20px'
  }
};

export default Response;
