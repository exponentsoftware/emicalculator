import React, { useState } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import InputComponent from "./user/index";
import DisplayEmi from "./display/index";
import { EmiContext } from "./Context.js";

function Component() {
  const [output, setOutput] = useState([]);

  return (

    // Providing the context to the compnents
    <EmiContext.Provider value={[output, setOutput]}> 

      <SimpleGrid p={4} columns={[1, 2]} spacing="10px">
        
        <InputComponent />

        <DisplayEmi />
      
      </SimpleGrid>
    </EmiContext.Provider>
  );
}

export default Component;
