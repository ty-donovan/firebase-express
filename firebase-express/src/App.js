import React from 'react';
import Form from './Form';
import Message from './Message';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const url = 'http://localhost:9000/messages';

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = id => {
    setMessages(messages.filter(message => message.id !== id));
  };

  return (
    <div className='app-container'>
      <div className='form-container'>
        <Form />
      </div>
      <div className='message-container'>
        {messages.map(message => (
          <Message key={message.id} id={message.id} name={message.name} message={message.message} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
