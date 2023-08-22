import React from 'react';
import {
  Link,
  Box,
  Text,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import FooterLink from './FooterLink';

const Footer = ({ mainColor }: { mainColor: string }) => {
  const orientation = useBreakpointValue({
    base: "column" as "column",
    md: "column" as "column",
    lg: "row" as "row",
  });

  return (
    <Box bg="white" p={5}>
      <Box p={5} as={Center} display="flex" flexDirection={orientation} gap={5}>
        <Box as={Center} display="flex" flexDirection="row" gap={5}>
          <FooterLink colorScheme={mainColor}>About</FooterLink>
          <FooterLink colorScheme={mainColor}>Services</FooterLink>
          <FooterLink colorScheme={mainColor}>Testimonials</FooterLink>
          <FooterLink colorScheme={mainColor}>Contact</FooterLink>
        </Box>
        <Box as={Center} display="flex" flexDirection="row" gap={5}>
          <FooterLink colorScheme={mainColor}>LinkedIn</FooterLink>
          <FooterLink colorScheme={mainColor}>Instagram</FooterLink>
        </Box>
      </Box>
      <Text as={Center} color="black" fontSize="xs" m={5} align="center">
        Authorised Representative of AIA Financial Advisers Ptd Ltd (Reg. No
        XXXXXXXXXX)
      </Text>
      <Text as={Center} color="black" fontSize="xs" m={5} align="center">
        * Financial Disclaimer: It should be noted that results, earnings and
        income claims made by XXXXX.com.sg and its representatives are based on
        client’s individual background, capacity, goals and experience. There is
        no assurance that examples of client’s results can be duplicated in
        future. We cannot guarantee your future results and/or success.
      </Text>
      <Text as={Center} color="black" fontSize="xs" m={5} align="center">
        Copyright © 2023 XXXXXXX – All Rights Reserved – Privacy Policy –
        Designed By Eldora Boo
      </Text>
    </Box>
  );
};

export default Footer;
