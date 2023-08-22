import React, { useRef } from "react";
import NextLink from "next/link";
import {
  useColorMode,
  HStack,
  VStack,
  Center,
  Button,
  Tooltip,
  Flex,
  Text,
  Spacer,
  Badge,
  Box,
  Link,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Checkbox,
  CheckboxGroup,
  Image,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import NavLink from "./components/NavLink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NavDrawer from "./components/NavDrawer";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Awards from "./components/Awards";
import Hero from "./components/Hero";
import About from "./components/About";

const Main: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const mainColor = "blue";

  return (
    <>
      <Box h="100vh" w="100vw">
        <NavBar ref={btnRef} onOpen={onOpen} mainColor={mainColor} />
        <NavDrawer
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
          mainColor={mainColor}
        />
        <Hero mainColor={mainColor} />
        <About mainColor={mainColor} />
        <Awards mainColor={mainColor} />
        <Services mainColor={mainColor} />
        <Testimonials mainColor={mainColor} />
        <Footer mainColor={mainColor} />
      </Box>
    </>
  );
};

export default Main;
