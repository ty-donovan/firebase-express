import React from 'react';
import './styles.css';

function Form() {


    return (
        <div className='form-wrapper'>
            <form>
                <input type='text' name='name' placeholder='Name' />
                <textarea name='message' placeholder='Message' />
                <button>Send</button>
            </form>
        </div>
    );
}

export default Form;