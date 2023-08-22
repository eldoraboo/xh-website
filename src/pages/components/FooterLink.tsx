import React from 'react';
import { Link, useColorMode } from '@chakra-ui/react';

const FooterLink = ({ children, colorScheme, ...props }: any) => {
  const { colorMode } = useColorMode();

  return (
    <Link
      color="black"
      style={{ textDecoration: "none", fontWeight: 500 }}
      _hover={{
        color: `${colorScheme}.500`,
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
