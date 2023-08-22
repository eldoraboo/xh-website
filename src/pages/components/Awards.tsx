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

const Awards = ({ mainColor }: { mainColor: string }) => {
  const { colorMode } = useColorMode();
  const orientation = useBreakpointValue({
    base: "column" as "column",
    md: "column" as "column",
    lg: "row" as "row",
  });

  return (
    <Box bg="gray.800" p={5} display="flex" flexDirection="column">
      <Heading
        size="lg"
        m={5}
        color="white"
        p={5}
        borderRight="4px solid"
        borderColor={`${mainColor}.500`}
      >
        Accolades
      </Heading>
      <Tabs variant="filled">
        <TabList
          justifyContent="center"
          m={2}
          flexDirection={orientation}
        >
          <Tab
            as="b"
            color="gray.800"
            bg="gray.600"
            _selected={{ color: "white", bg: `${mainColor}.500` }}
          >
            Awards Recognition
          </Tab>
          <Tab
            as="b"
            color="gray.800"
            bg="gray.600"
            _selected={{ color: "white", bg: `${mainColor}.500` }}
          >
            Club Memberships
          </Tab>
          <Tab
            as="b"
            color="gray.800"
            bg="gray.600"
            _selected={{ color: "white", bg: `${mainColor}.500` }}
          >
            Industry Recognition
          </Tab>
          <Tab
            as="b"
            color="gray.800"
            bg="gray.600"
            _selected={{ color: "white", bg: `${mainColor}.500` }}
          >
            Professional Qualifications
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid m={2} columns={[2, null, 3, 4]} spacing="20px">
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  Top Senior Director 2022
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  1st Runner-up, Top Director 2021
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  Million Dollar Round Table Unit (Ruby) 2021
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  Top Associate Director 2019
                </Text>
              </Box>
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid m={2} columns={[2, null, 3]} spacing="20px">
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  AIA FA Pinnacle Club (Gold Unit) 2023 and 2022
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  AIA FA Prestige Titanium Club 2022 and 2021
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  AIA FA Pinnacle Club (Unit) 2021 and 2020
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  AIA FA Prestige Platinum Club 2020
                </Text>
              </Box>
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid m={2} columns={[2, null, 3]} spacing="20px">
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  Million Dollar Round Table 2022, 2021, 2020 and 2019
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  International Dragon Award – Bronze Dragon Award (Manager
                  Category) 2022
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  100 IDA Team Award 2022, 2021, 2020 and 2019
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  International Dragon Award – Bronze Dragon Award (Agent
                  Category) 2021, 2020 and 2019
                </Text>
              </Box>
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid m={2} columns={[2, null, 3]} spacing="20px">
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  Rockwills Estate Planner, REP
                </Text>
              </Box>
              <Box
                borderBottom="2px solid"
                borderColor={`${mainColor}.500`}
                p={5}
                borderRadius="0"
              >
                <Text color="white" fontWeight="500">
                  Bachelors of Business Administration (Finance)
                </Text>
              </Box>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Awards;
