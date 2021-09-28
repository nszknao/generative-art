import { Container } from "@chakra-ui/react";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.VFC<Props> = ({ children }) => {
  return <Container maxW="full">{children}</Container>;
};
