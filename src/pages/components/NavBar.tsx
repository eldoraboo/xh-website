import React from "react";
import {
  Box,
  Flex,
  Button,
  Spacer,
  Icon,
  IconButton,
  useColorMode,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import { FaAlignJustify } from "react-icons/fa";

const NavBar = ({ onOpen, ref, mainColor }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const orientation = useBreakpointValue({
    base: "column" as "column",
    md: "column" as "column",
    lg: "row" as "row",
  });
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  return (
    <Box
      bg="gray.800"
      boxShadow="md"
      p={5}
      position="fixed"
      top="0"
      zIndex="sticky"
      w="full"
      display="flex"
      h="11vh"
    >
      <NavLink colorScheme={mainColor}>YourLogoHere</NavLink>
      <Spacer />
      {isLargerThanMD ? (
        <>
          <Flex>
            <NavLink colorScheme={mainColor}>Home</NavLink>
            <NavLink colorScheme={mainColor}>About</NavLink>
            <NavLink colorScheme={mainColor}>Services</NavLink>
            <NavLink colorScheme={mainColor}>Testimonials</NavLink>
          </Flex>
          <Spacer />
          <Button
            borderRadius="0"
            colorScheme={mainColor}
          >
            Contact
          </Button>
        </>
      ) : (
        <IconButton aria-label="" ref={ref} onClick={onOpen}>
          <Icon as={FaAlignJustify} />
        </IconButton>
      )}
    </Box>
  );
};

export default NavBar;
