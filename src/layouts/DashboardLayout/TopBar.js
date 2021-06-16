import React, { useState,useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Grid,
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './dash.css'
import {reportContext} from '../../../src/context/ContextProvider'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  picker:{
    
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);



  const{ddate,setDdate} =useContext(reportContext)

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>

  <Grid  
  className={classes.picker}
  container
  direction="row"
  justify="center"
  alignItems="center">
  <DatePicker onChange={(e) => {
            setDdate(e);
          }}
          selected={ddate}
          className="select"
          dateFormat="dd MMM yyyy" relativeSize={true} />
  </Grid>


       
       
        
        <Box flexGrow={1} />
        
        <Hidden mdDown>
          
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
          
        </Hidden>
        
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
