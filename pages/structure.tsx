import { VStack, Heading } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import { Layout } from "src/components/Layout";
const P5Wrapper = dynamic(() => import("src/P5Wrapper"), { ssr: false });
import { coordinates } from "src/sketches/structure/coordinates";

const Structure: NextPage = () => {
  return (
    <Layout>
      <Heading>Structure</Heading>

      <VStack align="start">
        <P5Wrapper sketch={coordinates} />
      </VStack>
    </Layout>
  );
};

export default Structure;
