import React from 'react';
import styles from './Event.scss';
import {Link} from 'react-router-dom';

const Event = ({id='123abc'}) => (
    <div className={styles.component}>
        <h2>Event view</h2>
        <h3>{id}</h3>
    </div>
);



export default Event;