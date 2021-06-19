import React from 'react';
import styles from './Orders.scss';
import {Link} from 'react-router-dom';

const Orders = ({id='123abc'}) => (
    <div className={styles.component}>
        <h2>Orders view</h2>
        <Link to={`${process.env.PUBLIC_URL}/order/new/`}>New</Link>
        <Link to={`${process.env.PUBLIC_URL}/order/${id}`}>Order {id}</Link>
    </div>
);



export default Orders;