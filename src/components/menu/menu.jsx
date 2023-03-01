import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ToolBar from '@mui/material/ToolBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ToolTip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CoffeIcon from '@mui/icons-material/Coffee';

function MenuNavBar( props ) {

  const { pages = [], settings = [], title = '', urls = [] } = props;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  //Event handlers
  const handleOpenNavMenu = (event) => {
    console.log('aqui!');
    setAnchorElNav(event.currentTarget);
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }

  const handleCloseNavMenu = (event) => {
    const page = event.currentTarget.innerText;

    console.log( `Page to open: ${ page }` );
    setAnchorElNav(null);
  }

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  }

  return (
    <AppBar position='static' sx={{ bgcolor: "brown"}}>
      <Container maxWidth="x1">
        <ToolBar disableGutters>
          <CoffeIcon sx={{ display: {xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',              
            }}
          >
            { title }
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ handleOpenNavMenu }
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'le ft'
              }}
              keepMounted 
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              { 
                pages.map((page, idx) => {
                  <MenuItem key={idx} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                })
              }
            </Menu>
          </Box>
          <CoffeIcon sx={{ display:{ xs:'flex', md:'none' }, mr: 1 }}/>
          <Typography 
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            { title }
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} >
          {
            pages.map((page, idx) => (
              <Button
                key={idx}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFFF', display: 'block' }}
              >
                { page }
              </Button>
            ))}
          </Box>
          <Box sx={{flexGrow: 0 }}>
            <ToolTip title="Open Settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Settings" src="/" />
              </IconButton>
            </ToolTip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                settings.map((setting, idx) => (
                  <MenuItem key={idx} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
        </ToolBar>
      </Container>
    </AppBar>
  )
}

export default MenuNavBar