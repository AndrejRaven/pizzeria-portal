import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

const Tables = ({id='123abc'}) => (
    <div className={styles.component}>
        <h2>Tables view</h2>
        <Link to={`${process.env.PUBLIC_URL}/booking/${id}`}>booking {id}</Link>
        <Link to={`${process.env.PUBLIC_URL}/event/${id}`}>event {id}</Link>
    </div>
);



export default Tables;