import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        width: '90%',
        padding: '2%',
    },
    header: {
        ...theme.typography.button,
    },
    button: {
        margin: '2%',
    },
    order: {
        display: 'flex',
        margin: '2%',
        paddiong: '10%',
    },
    link: {
        ...theme.typography.button,
        color: theme.palette.primary.light,
        textDecoration: 'none',
    }
}));

const demoContent = [
    { id: '112abc', date: '22.06.21', table: 1, status: 'ready', price: '12$' },
    { id: '115abc', date: '22.06.21', table: 2, status: 'ordered', price: '122$' },
    { id: '124abc', date: '22.06.21', table: 3, status: 'free', price: '0' },
    { id: '117abc', date: '23.06.21', table: 3, status: 'ordered', price: '122$' },
];


const Orders = () => {
    const classes = useStyles();

    const handleStatus = () => {
        console.log('status');
    }

    return (
        <div>
            <Typography
                align='center'
                className={classes.header}>
                Orders
            </Typography>
            <Grid container className={classes.root}>
                <Grid item xs={4}>
                    <Typography
                        align='center'
                        className={classes.header}>
                        Table 1
                    </Typography>
                    <Link className={classes.link} to={`${process.env.PUBLIC_URL}/orders/order/new`} >
                        <Button variant='outlined' className={classes.button}
                            size='small' color='secondary' >New</Button>
                    </Link>
                    <Divider />
                    {demoContent.map((order, i) => (
                        (order.table == '1' && order.status != 'delivered') ? (
                            <div className={classes.order}>
                                <Link className={classes.link} key={i} to={`${process.env.PUBLIC_URL}/order/${order.id}`} >Total: {order.price}, id: {order.id}, date: {order.date}</Link>
                                <Button variant='outlined' onClick={() => { handleStatus(order.status) }}
                                    size='small' color='secondary' >{order.status}</Button>
                            </div>
                        ) : null
                    ))}
                </Grid> 
                <Grid item xs={4}>
                    <Typography
                        align='center'
                        className={classes.header}>
                        Table 2
                    </Typography>
                    <Link className={classes.link} to={`${process.env.PUBLIC_URL}/orders/order/new`} >
                        <Button variant='outlined' className={classes.button}
                            size='small' color='secondary' >New</Button>
                    </Link>
                    <Divider />
                    {demoContent.map((order, i) => (
                        (order.table == '1' && order.status != 'delivered') ? (
                            <div className={classes.order}>
                                <Link className={classes.link} key={i} to={`${process.env.PUBLIC_URL}/order/${order.id}`} >Total: {order.price}, id: {order.id}, date: {order.date}</Link>
                                <Button variant='outlined' onClick={() => { handleStatus(order.status) }}
                                    size='small' color='secondary' >{order.status}</Button>
                            </div>
                        ) : null
                    ))}
                </Grid> 
                <Grid item xs={4}>
                    <Typography
                        align='center'
                        className={classes.header}>
                        Table 3
                    </Typography>
                    <Link className={classes.link} to={`${process.env.PUBLIC_URL}/orders/order/new`} >
                        <Button variant='outlined' className={classes.button}
                            size='small' color='secondary' >New</Button>
                    </Link>
                    <Divider />
                    {demoContent.map((order, i) => (
                        (order.table == '1' && order.status != 'delivered') ? (
                            <div className={classes.order}>
                                <Link className={classes.link} key={i} to={`${process.env.PUBLIC_URL}/order/${order.id}`} >Total: {order.price}, id: {order.id}, date: {order.date}</Link>
                                <Button variant='outlined' onClick={() => { handleStatus(order.status) }}
                                    size='small' color='secondary' >{order.status}</Button>
                            </div>
                        ) : null
                    ))}
                </Grid> 
            </Grid>
        </div>
    );
}



export default Orders;

