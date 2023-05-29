import React from 'react';
import Form from './Form';
import Message from './Message';

function App() {
  return (
    <div className='app-container'>
      <div className='form-container'>
        <Form />
      </div>
      <div className='message-container'>
        <Message />
        <Message />
      </div>
    </div>
  );
}

export default App;
