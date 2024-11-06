import React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

const NavigationMenu = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleMenuClick}>Menu</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {session ? (
          <>
            <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
            <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
            <MenuItem onClick={() => signIn('google')}>Sign In</MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};

export default NavigationMenu;
