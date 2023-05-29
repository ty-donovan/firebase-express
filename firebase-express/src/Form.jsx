import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

function Form() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        sendMessage(name, message);
        setName('');
        setMessage('');
    };

    return (
        <div className='form-wrapper'>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Name' value={name} onChange={event => setName(event.target.value)} />
            <textarea name='message' placeholder='Message' value={message} onChange={event => setMessage(event.target.value)} />
            <button type='submit'>Send</button>
        </form>
        </div>
    );
}

function sendMessage(name, message) {
    const url = 'http://localhost:9000/api/messages';

    axios.post(url, { name, message })
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.error(error);
        });
}

export default Form;