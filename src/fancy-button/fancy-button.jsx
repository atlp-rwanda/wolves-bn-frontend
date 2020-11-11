import React from 'react';
import styles from './fancy-button.scss';

const FancyButton = ({ label }) => (
    <button className="button">{label}</button>
);

export default FancyButton;