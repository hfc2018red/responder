import React from 'react';

function Response() {
  return(
    <div>
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
    </div>
  )
}

export default Response;
