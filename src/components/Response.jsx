import React from 'react';
import { Button } from 'antd';


function Response() {
  return(
    <div style={styles.main}>
      <p> This will be userQuestion variable.</p>

      <p>Thank you for your question and we can suggest the following to help: </p>
      <p>This will be helperResponse variable.</p>
      <a
        className="resources-link"
        href="https://www.oregonfoodbank.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Oregon Food Bank Link
      </a>
      <Button type="primary">primary</Button>
    </div>
  )
}

const styles = {
  main: {
    backgroundColor: '#FF9773',
    padding: '20px'
  }
};

export default Response;
