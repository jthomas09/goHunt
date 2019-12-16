import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(1.5)
  },
  appBar:{
    backgroundColor:  "#f37835"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles({});
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/joseph-thomas-b915a5161/", "_blank") 
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            GoHunt Challenge
          </Typography>
          <Button color="inherit" onClick={handleClick}>Joe</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar