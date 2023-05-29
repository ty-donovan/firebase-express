import './styles.css';
import React from 'react';

function Message() {


    return (
        <div className='message-wrapper'>
            <div className='name'>
                <h2>Name</h2>
            </div>
            <div className='message'>
                <h4>Message</h4>
            </div>
            <div className='buttons'>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default Message;