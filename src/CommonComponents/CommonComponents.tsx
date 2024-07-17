import * as React from 'react';
import { Outlet } from 'react-router-dom';

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
      <div>
          This is the Navbar. Will pull in the other stuff soonish.
          <Outlet />
          {children}
      </div>
    );
  }
  
  export default CommonComponents;