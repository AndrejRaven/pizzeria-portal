import React from 'react';
import styles from './Order.scss';
import {Link} from 'react-router-dom';

const Order = props => (
    <div className={styles.component}>
        <h2>Order view</h2>
        <h3>{props.id}</h3>
    </div>
);



export default Order;