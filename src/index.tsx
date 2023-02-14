import * as React from "react";
import { Box, TextProps } from "@chakra-ui/react";

export interface IProps extends TextProps {
  title: string;
}

function TestingComponent({ title }: IProps) {
  return (
    <Box
      w="100%"
      h={60}
      p={4}
      fontSize="xl"
      fontWeight="bold"
      bg="tomato"
      color="white"
      display="flex"
      alignItems="center"
    >
      {title}
    </Box>
  );
}

export default TestingComponent;