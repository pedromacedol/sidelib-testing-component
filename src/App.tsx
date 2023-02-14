import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import TestingComponent, { IProps } from ".";

function App({ title }: IProps) {
  return (
    <ChakraProvider>
      <TestingComponent title={title} />
    </ChakraProvider>
  )
}

export default App;