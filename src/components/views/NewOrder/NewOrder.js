import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import PopupConfirm from '../../common/PopupConfirm/PopupConfirm';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: '5%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

class NewOrder extends React.Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { loading: { active, error }, products } = this.props;
    const classes = this.props;

    const date = new Date().toLocaleString("sv-SE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
      }).replace(" ", "T");

    const Wrapper = props => (
      <div className={classes.props}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">New order</Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <Grid container spasing={3} justify="center" align="center" alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="h5" gutterBottom>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="datetime-local"
                      label="Pick a date and time"
                      type="datetime-local"
                      defaultValue={date}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                  </Typography>
                  <Typography variant="h5" gutterBottom>Table number: x</Typography>
                </Grid>
                <Grid item xs={6}>{props.children}</Grid>
                <Grid item xs={3}>
                  <IconButton aria-label="cart" onClick={() => console.log("clicked")}>
                    <StyledBadge badgeContent={1} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );

    if(active || !products.length){
      return (
        <Wrapper>
          <p>Loading...</p>
        </Wrapper>
      );
    } else if(error) {
      return (
        <Wrapper>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>  
            {products.map(({id, name, price, params}) => (
              <Grid container key={id}>
                <Grid item xs={9}>
                  <Typography variant="h5" key={id} gutterBottom>
                      {name}, price: {price}
                  </Typography> 
                </Grid>
                <Grid item xs={3}>
                  <Button variant='outlined' size='small' color='primary' className={classes.button}>Add</Button>
                </Grid> 
              </Grid>
            ))}
        </Wrapper>
      );
    }
  }
}

export default withStyles(useStyles)(NewOrder); 