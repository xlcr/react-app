import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from "@mui/material";

interface CommonComponentsProps {
    isLoggedIn: boolean;
    children?: React.ReactNode;
  };

const CommonComponents: React.FC<CommonComponentsProps> = ({ isLoggedIn, children }) => {
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <Container fixed>
          This is the Navbar. Will pull in the other stuff soonish.
          <Outlet />
          {children}
      </Container>
    );
  }
  
  export default CommonComponents;