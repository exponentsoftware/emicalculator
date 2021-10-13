import React from "react";
import { Heading, VStack,HStack,Box,StackDivider } from "@chakra-ui/layout";

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

function UserInput({ isReadOnly,handleReset, handleChange, handleSubmit }) {
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
        
          
      <Heading p={3}>Loan EMI Calculator</Heading>
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
        <InputGroup>
          <InputLeftAddon children="Loan Amount" />
          <Input
            type="number"
            placeholder="Enter amount"
            name="principle"
            onChange={handleChange}
            isReadOnly={isReadOnly}
            
          />
          <InputRightAddon children="INR" />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Loan Tenure" />
          <Input
            type="number"
            placeholder="Enter months"
            name="months"
            onChange={handleChange}
            isReadOnly={isReadOnly}
          />
          <InputRightAddon children="Months" />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Interest Rate" />
          <Input
            type="number"
            placeholder="NN.NN"
            name="interestRate"
            onChange={handleChange}
            isReadOnly={isReadOnly}
          />
          <InputRightAddon children="%" />
        </InputGroup>
<HStack>
<Button colorScheme="linkedin" size="lg" onClick={handleSubmit}>
          CALCULATE
        </Button>

        <Button colorScheme="linkedin" size="lg" onClick={handleReset}>
          Reset
        </Button>
  </HStack>
        
      </VStack>
      </Box>
  );
}

export default UserInput;
