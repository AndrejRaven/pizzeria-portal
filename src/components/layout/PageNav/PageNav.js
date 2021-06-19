import React from 'react';
import { NavLink} from 'react-router-dom';
import styles from './PageNav.scss';


const PageNav = (props) => (
    <div className={styles.component}>
        <nav className={styles.nav}>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/orders`} activeClassName='active'>Orders</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
        </nav>
    </div>
);


export default PageNav;