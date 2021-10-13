import { Grid, GridItem, Heading, Box, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { EmiContext } from "./../Context";

function DisplayEmi() {
  // eslint-disable-next-line
  const [output, setOutput] = useContext(EmiContext); //getting the calculated emi using context

  return (
    <Box
      maxW="xl"
      shadow="xl"
      borderWidth="1px"
      h="350px"
      p={2}
      border="blue.500"
      overflow="hidden"
      borderRadius="xl"
    >
      <Heading>Loan EMI Calculator</Heading>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem p={4} m={4} colSpan={2} bg="yellow.200">
          <Text fontSize="20px">Loan EMI</Text>
          <Text fontSize="20px">{output[0]}</Text>
        </GridItem>
        <GridItem p={4} m={4} colSpan={2} bg="blue.100">
          <Text fontSize="20px">Total Interest Payable</Text>
          <Text fontSize="20px">{output[1]}</Text>
        </GridItem>
        <GridItem p={4} m={4} colSpan={4} bg="purple.100">
          <Text fontSize="20px">Total Payment</Text>
          <Text fontSize="20px">{output[2]}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default DisplayEmi;
