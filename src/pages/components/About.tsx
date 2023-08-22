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
  Flex,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import xh from "../../../public/XH.jpeg";

const About = ({ mainColor } : { mainColor: string }) => {
  const { colorMode } = useColorMode();
  const orientation = useBreakpointValue({
    base: "column" as "column",
    md: "column" as "column",
    lg: "row" as "row",
  });

  return (
    <Box bg="gray.700" p={5} display="flex" flexDirection="column">
      <Card m={5} borderRadius="0" bg="white">
        <Flex flexDirection={orientation} justifyContent="space-between">
          {orientation === "column" && (
            <Image alt="" src={xh} style={{ objectFit: "cover" }} />
          )}
          <Flex m={10} gap={5} flexDirection="column">
            <Heading
              size="sm"
              color="black"
              p={5}
              borderLeft="4px solid"
              borderColor={`${mainColor}.500`}
            >
              Senior Director
              <Text color={`${mainColor}.500`}>Yap Xin Horng</Text>
            </Heading>
            <Text color="black">
              <b>A coach, rather than a mentor.</b> I always regard myself as a
              coach rather than a mentor or leader to the team. Being a coach, I
              must be relatable to them and communicate well with them. It is
              crucial that we remain sensitive to their emotions and their
              stories. It is an invaluable feeling when financial consultants
              trust and depend on me to help them, be it inside or outside of
              this career.
            </Text>
            <Text color="black">
              <b>Staying versatile during a pandemic.</b> The Covid-19 pandemic
              taught me to be versatile and adaptable to changes. The
              game-changer to me was being able to meet and sign deals with
              clients online. I believe the introduction of this hybrid model
              has brought more advantages in helping us be more productive and
              efficient. Mentoring in a digitalised world has also taught me to
              be more engaging when coaching others through a screen.
            </Text>
            <Text color="black">
              <b>Work hard anyway, and success will be found.</b> Starting out
              in this career is never easy. When you have no achievements,
              little credibility and are faced with certain social stigmas, only
              those that are motivated for the right reasons will strive to
              better themselves and learn continuously. The day we rest on our
              laurels is the day we stop growing. Every day, I am thankful for
              all my clients and associates who have trusted me in this journey.
            </Text>
          </Flex>
          {orientation !== "column" && (
            <Image alt="" src={xh} style={{ objectFit: "cover" }} />
          )}
        </Flex>
      </Card>
    </Box>
  );
};

export default About;
