import React from 'react';
import { Link, useColorMode } from '@chakra-ui/react';

const NavLink = ({ children, colorScheme, ...props }: any) => {
    const { colorMode } = useColorMode();

    return (
      <Link
        p={2}
        color="white"
        style={{ textDecoration: "none", fontWeight: 500 }}
        _hover={{
          borderBottom: "4px solid",
          borderColor:
            colorMode === "dark" ? `${colorScheme}.200` : `${colorScheme}.500`,
         }}
        {...props}
      >
        {children}
      </Link>
    );};

export default NavLink;
