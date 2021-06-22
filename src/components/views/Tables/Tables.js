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
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
        </List>
        <List className={classes.list} aria-label="orders">
            <Typography  
            align='center' 
            className={classes.header}>
            Events
            </Typography>
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Table number: ${id},  `} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to={`${process.env.PUBLIC_URL}/order/${id}`}>
            <ListItemText primary={`Order number: ${id}`} />
            </ListItem>
            <Divider />
        </List>
        </div>
    </div>  
  );
}

// import React from 'react';
// import styles from './Tables.scss';
// import {Link} from 'react-router-dom';

// const Tables = ({id='123abc'}) => (
//     <div className={styles.component}>
//         <h2>Tables view</h2>
//         <Link to={`${process.env.PUBLIC_URL}/booking/${id}`}>booking {id}</Link>
//         <Link to={`${process.env.PUBLIC_URL}/event/${id}`}>event {id}</Link>
//     </div>
// );



export default Tables;