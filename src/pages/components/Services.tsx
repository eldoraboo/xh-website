import React from "react";
import {
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

const Services = ({ mainColor }: { mainColor: string }) => {
  const { colorMode } = useColorMode();

  return (
    <Box bg="gray.700" p={5} display="flex" flexDirection="column">
      <Heading
        size="lg"
        m={5}
        color="white"
        p={5}
        borderLeft="4px solid"
        borderColor={`${mainColor}.500`}
      >
        Services
      </Heading>
      <SimpleGrid m={5} columns={[2, null, 3]} spacing="20px">
        <Card variant="filled" bg={`${mainColor}.700`} borderRadius="0">
          <CardHeader>
            <Heading color="white" size="md">
              {" "}
              Financial Advisory
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white">
              To help you take ownership of your wealth and plan your financial
              life, setting and achieving realistic goals.
            </Text>
          </CardBody>
        </Card>
        <Card variant="filled" bg={`${mainColor}.600`} borderRadius="0">
          <CardHeader>
            <Heading color="white" size="md">
              {" "}
              Wealth Management
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white">
              To protect what’s precious. Helping you manage your wealth, making
              sure all your bases are covered.
            </Text>
          </CardBody>
        </Card>
        <Card variant="filled" bg={`${mainColor}.500`} borderRadius="0">
          <CardHeader>
            <Heading color="white" size="md">
              {" "}
              Personal Investment
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white">
              To live a financially free life, helping you make informed
              investment decisions, growing your wealth in a way that suits you.
            </Text>
          </CardBody>
        </Card>
        <Card variant="filled" bg={`${mainColor}.700`} borderRadius="0">
          <CardHeader>
            <Heading color="white" size="md">
              {" "}
              Retirement Planning
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white">
              ​To ensure that you live a life that outlives you, having enough
              at the end of time.
            </Text>
          </CardBody>
        </Card>
        <Card variant="filled" bg={`${mainColor}.600`} borderRadius="0">
          <CardHeader>
            <Heading color="white" size="md">
              {" "}
              Mortgage Planning
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white">
              For Mortgage Insurance and understanding where your property fits
              in your financial portfolio.
            </Text>
          </CardBody>
        </Card>
        <Card variant="filled" bg={`${mainColor}.500`} borderRadius="0">
          <CardHeader>
            <Heading color="white" size="md">
              {" "}
              Legacy Planning
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white">
              To ensure that your assets are passed down to your loved ones,
              keeping your legacy and loved ones protected.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Services;
