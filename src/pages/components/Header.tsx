import React from "react";
import {
  Box,
  Text,
  Spacer,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";

const Header = ({}) => {
  const { colorMode } = useColorMode();

  const orientation = useBreakpointValue({
    base: "column" as "column",
    md: "column" as "column",
    lg: "row" as "row",
  });

  return (
    <Box bg="white" p={5} display="flex" flexDirection={orientation}>
      <Text color="black" fontSize="xs" align="center">
        ABC DEF - AIA FA Senior Director
      </Text>
      {orientation !== "column" && <Spacer />}
      <Text color="black" fontSize="xs" align="center">
        Authorised Representative of AIA Financial Advisers Ptd Ltd (Reg. No
        XXXXXXXXXX)
      </Text>
    </Box>
  );
};

export default Header;
