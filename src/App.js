import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Component from "./component";

function App() {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}

export default App;
