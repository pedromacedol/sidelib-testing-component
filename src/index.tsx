import * as React from "react";
import { Box, TextProps } from "@chakra-ui/react";

export interface IProps extends TextProps {
  title: string;
}

export function TestingComponent({ title, ...rest }: IProps) {
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
      {...rest}
    >
      {title}
    </Box>
  );
}
