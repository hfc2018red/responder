import React from 'react';

function IncomingQuestions(props) {
  return(
    <div style={styles.main}>
      <h1>Question Queue:</h1>
      <p>questionVariable goes here</p>
    </div>
  );
}


const styles = {
  main: {
    backgroundColor: 'white',
    padding: '20px'
  }
};

export default IncomingQuestions;
