import './styles.css';
import React from 'react';
import axios from 'axios';

function Message({ id, name, message, onDelete }) {
    const url = `http://localhost:9000/messages/${id}`;

    // onclick function to delete message
    const deleteMessage = () => {
        axios.delete(url)
            .then(response => {
                console.log(response.data);
                onDelete(id);
            })
            .catch(error => {
                console.error(error);
            });
    };

    // onclick function to edit message
    const editMessage = () => {
        axios.put(url, { name, message })
            .then(response => { 
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div className='message-wrapper'>
            <div className='name'>
                <h2>{name}</h2>
            </div>
            <div className='message'>
                <h4>{message}</h4>
            </div>
            <div className='buttons'>
                <button>Edit</button>
                <button onClick={deleteMessage}>Delete</button>
            </div>
        </div>
    );
}

export default Message;