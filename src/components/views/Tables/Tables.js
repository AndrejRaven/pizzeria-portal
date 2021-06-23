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
    backgroundColor: theme.palette.background.paper,
  },
  list: {
      width: '50%',
      padding: '5%',
  },
  header: {
    ...theme.typography.button,
  },
}));

const Tables = ({id='123abc'}) => {
  const classes = useStyles();

  return (
    <div>
        <Typography  
        align='center' 
        className={classes.header}>
        Tables
        </Typography>
        <div className={classes.root}>
        <List className={classes.list} aria-label="orders">
            <Typography  
            align='center' 
            className={classes.header}>
            Bookings
            </Typography>
        </List>
        <List className={classes.list} aria-label="orders">
            <Typography  
            align='center' 
            className={classes.header}>
            Events
            </Typography>
        </List>
        </div>
    </div>  
  );
}


export default Tables;