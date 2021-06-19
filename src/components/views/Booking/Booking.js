import React from 'react';
import styles from './Booking.scss';
import {Link} from 'react-router-dom';

const Booking = ({id='123abc'}) => (
    <div className={styles.component}>
        <h2>Booking view</h2>
        <h3>{id}</h3>
    </div>
);



export default Booking;