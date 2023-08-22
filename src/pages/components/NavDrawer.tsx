import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import FooterLink from "./FooterLink";

const NavDrawer = ({ isOpen, onClose, btnRef, mainColor }: any) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      size="full"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <Flex flexDirection="column" gap={5} m={5}>
            <FooterLink colorScheme={mainColor}>Home</FooterLink>
            <FooterLink colorScheme={mainColor}>About</FooterLink>
            <FooterLink colorScheme={mainColor}>Services</FooterLink>
            <FooterLink colorScheme={mainColor}>Testimonials</FooterLink>
            <Button my={2} w="fit-content" borderRadius="0" colorScheme={mainColor}>
              Contact
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
