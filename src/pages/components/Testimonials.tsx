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
  Flex,
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

const Testimonials = ({ mainColor }: { mainColor: string }) => {
  const { colorMode } = useColorMode();

  return (
    <Box bg="gray.600" p={5} display="flex" flexDirection="column">
      <Heading
        size="lg"
        m={5}
        color="white"
        p={5}
        borderRight="4px solid"
        borderColor={`${mainColor}.500`}
      >
        Testimonials
      </Heading>
      <Tabs m={5} variant="unstyled" colorScheme="blue">
        <TabPanels>
          <TabPanel>
            <Text color="white" fontSize="md" as="b">
              "Outstanding Financial Guidance"
            </Text>
            <Text color="white">
              "I had the pleasure of working with this financial advisor, and I
              must say their guidance was outstanding. They helped me navigate
              through complex financial decisions with ease. I highly recommend
              their services."
            </Text>
            <Text color="white" fontSize="sm" as="b">
              - John Doe, Business Owner
            </Text>
          </TabPanel>
          <TabPanel>
            <Text color="white" fontSize="md" as="b">
              "A True Expert"
            </Text>
            <Text color="white">
              "This financial advisor is a true expert in their field. They
              provided me with a personalized financial plan that has
              significantly improved my financial stability. I couldn't be
              happier with the results."
            </Text>
            <Text color="white" fontSize="sm" as="b">
              - Jane Smith, Retiree
            </Text>
          </TabPanel>
          <TabPanel>
            <Text color="white" fontSize="md" as="b">
              "Trustworthy and Reliable"
            </Text>
            <Text color="white">
              "I've been working with this financial advisor for years, and
              they've always been trustworthy and reliable. Their in-depth
              knowledge of the financial industry has helped me make informed
              decisions."
            </Text>
            <Text color="white" fontSize="sm" as="b">
              - Robert Johnson, Investor
            </Text>
          </TabPanel>
          <TabPanel>
            <Text color="white" fontSize="md" as="b">
              "Exceptional Service"
            </Text>
            <Text color="white">
              "The service provided by this financial advisor is exceptional.
              They take the time to understand your unique financial situation
              and provide tailored solutions. I highly recommend their
              expertise."
            </Text>
            <Text color="white" fontSize="sm" as="b">
              - Sarah Brown, Small Business Owner
            </Text>
          </TabPanel>
          <TabPanel>
            <Text color="white" fontSize="md" as="b">
              "Life-Changing Financial Advice"
            </Text>
            <Text color="white">
              "Working with this financial advisor has been a game-changer for
              me. Their advice and strategies have helped me achieve my
              long-term financial goals. I'm grateful for their expertise."
            </Text>
            <Text color="white" fontSize="sm" as="b">
              - Michael Wilson, Engineer
            </Text>
          </TabPanel>
        </TabPanels>
        <TabList>
          <Flex m={4} gap={2}>
            <Tab
              color="white"
              bg="gray.500"
              _selected={{ bg: `${mainColor}.500` }}
            ></Tab>
            <Tab
              color="white"
              bg="gray.500"
              _selected={{ bg: `${mainColor}.500` }}
            ></Tab>
            <Tab
              color="white"
              bg="gray.500"
              _selected={{ bg: `${mainColor}.500` }}
            ></Tab>
            <Tab
              color="white"
              bg="gray.500"
              _selected={{ bg: `${mainColor}.500` }}
            ></Tab>
            <Tab
              color="white"
              bg="gray.500"
              _selected={{ bg: `${mainColor}.500` }}
            ></Tab>
          </Flex>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default Testimonials;
