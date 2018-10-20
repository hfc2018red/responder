import React from 'react';
import PropTypes from 'prop-types';

function IncomingQuestions(props) {
  return(
    <div style={styles.main}>
      <h1>Question Queue:</h1>
      <p>{props.threads}</p>
    </div>
  );
  console.log(props.threads);
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
