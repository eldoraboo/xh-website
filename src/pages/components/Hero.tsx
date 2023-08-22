import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Spacer,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  SimpleGrid,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import xh from "../../../public/XH.jpg";

const Hero = ({ mainColor }: { mainColor: string }) => {
  const { colorMode } = useColorMode();
  const orientation = useBreakpointValue({
    base: "column" as "column",
    md: "column" as "column",
    lg: "row" as "row",
  });

  return (
    <Box bg="gray.600" display="flex" flexDirection="column" pt={50}>
      <Image alt="" src={xh} style={{ width: "100%" }} />
    </Box>
  );
};

export default Hero;
