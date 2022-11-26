import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              <Button>
                <NavLink
                  to='.'
                  end
                >
                  Home
                </NavLink>
              </Button>
            </Typography>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              <Button>
                <NavLink to='about'>Mui style Components</NavLink>
              </Button>
            </Typography>{" "}
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              <Button>
                <NavLink to='contacts'>Todo with MUI component</NavLink>
              </Button>
            </Typography>{" "}
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              <Button>
                <NavLink to='courses'>Courses</NavLink>
              </Button>
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

export default Menu;
