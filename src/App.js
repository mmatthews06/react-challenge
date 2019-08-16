import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    color: 'white',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <MenuIcon className={classes.menuItem} fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Q2 Solutions
          </Typography>
          <Button>
            <PersonIcon className={classes.menuItem} fontSize="large" />
          </Button>
          <span className={classes.menuItem}>
            q12355@quintiles.net
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
