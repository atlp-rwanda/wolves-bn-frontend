import React from 'react';
import './Button.scss';

const Button = (props) => (<button className='btn' onClick={props.handleSubmit}>
{props.content}
</button>);
export default Button;