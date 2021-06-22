import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

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
  }
}));

const demoContent = [
    {id: '1', date: '22.06.21', table: 1, status: 'new', price: '12$'},
    {id: '2', date: '22.06.21', table: 1, status: 'ordered', price: '122$'},
    {id: '3', date: '22.06.21', table: 1, status: 'ready', price: '124$'},
    {id: '4', date: '22.06.21', table: 1, status: 'delivered', price: '125$'},
    {id: '5', date: '22.06.21', table: 1, status: 'new', price: '12$'},
    {id: '6', date: '22.06.21', table: 2, status: 'ordered', price: '122$'},
    {id: '7', date: '22.06.21', table: 2, status: 'ready', price: '124$'},
    {id: '8', date: '22.06.21', table: 2, status: 'delivered', price: '125$'},
    {id: '9', date: '22.06.21', table: 3, status: 'new', price: '12$'},
    {id: '10', date: '22.06.21', table: 3, status: 'ordered', price: '122$'},
  ];


const Orders = ({ref}) => {
  const classes = useStyles();

  function handleStatus(status) {
    switch(status) {
        case 'ready' :
            
        
    }
}

  return (
    <div>
        <Typography  
        align='center' 
        className={classes.header}>
        Orders
        </Typography>
        <div className={classes.root}>
            <List className={classes.list} aria-label="table1">
            <Typography  
            align='center' 
            className={classes.header}>
            Table 1
            </Typography>
            <Button variant='outlined'  className={classes.button}
                component={Link} to={`${process.env.PUBLIC_URL}/order/new`}
                size='small' color='secondary' >New</Button>
            <Divider />
            {demoContent.map((order)  => (
                (order.table == '1' && order.status != 'delivered') ? (
                    <div className={classes.order}>
                        <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${order.id}`} activeClassName="active" exact>
                        <ListItemText primary={`Total: ${order.price}, id: ${order.id}, date:${order.date}`} />
                        </ListItem> 
                        <Button variant='outlined' onClick={() => handleStatus(order.status)}
                        size='small' color='secondary' >{order.status}</Button>
                    </div>
                ) : ( null )
            ))}    
            </List>
            <List className={classes.list} aria-label="table1">
        <Typography  
        align='center' 
        className={classes.header}>
        Table 2
        </Typography>
        <Button variant='outlined' className={classes.button}
            component={Link} to={`${process.env.PUBLIC_URL}/order/new`}
            size='small' color='secondary' >New</Button>
        <Divider />
        {demoContent.map((order)  => (
            (order.table == '2' && order.status != 'delivered') ? (
                <div className={classes.order}>
                    <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${order.id}`} activeClassName="active" exact>
                    <ListItemText primary={`Total: ${order.price}, id: ${order.id}, date:${order.date}`} />
                    </ListItem> 
                    <Button variant='outlined' onClick={() => handleStatus(order.status)}
                    size='small' color='secondary' >{order.status}</Button>
                </div>
            ) : ( null )
        ))}    
        </List>
        <List className={classes.list} aria-label="table1">
        <Typography  
        align='center' 
        className={classes.header}>
        Table 3
        </Typography>
        <Button variant='outlined'  className={classes.button}
            component={Link} to={`${process.env.PUBLIC_URL}/order/new`}
            size='small' color='secondary' >New</Button>
        <Divider />
        {demoContent.map((order)  => (
            (order.table == '3' && order.status != 'delivered') ? (
                <div className={classes.order}>
                    <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${order.id}`} activeClassName="active" exact>
                        <ListItemText primary={`Total: ${order.price}, id: ${order.id}, date:${order.date}`} />
                    </ListItem> 
                    <Button variant='outlined' onClick={() => handleStatus(order.status)}
                    size='small' color='secondary' >{order.status}</Button>
                </div>
            ) : ( null )
        ))}    
        </List>
        </div>  
    </div>
  );
}



export default Orders;

