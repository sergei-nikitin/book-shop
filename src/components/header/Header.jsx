import { AppBar, IconButton, Toolbar, Typography, Badge } from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import React from 'react';

import s from './Header.module.scss';

const Header = ({ handleCart, orderLength }) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div className={s.logoWrapper}>
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <HomeWorkIcon className={s.logoIcon} />
          </IconButton>
          <Typography variant="h5" component="span">
            LOGO
          </Typography>
        </div>
        <IconButton color="inherit" onClick={handleCart}>
          <Badge badgeContent={orderLength} color="secondary">
            <ShoppingCartCheckoutIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
