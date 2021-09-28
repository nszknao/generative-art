import { VStack, Heading } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import { Layout } from "src/components/Layout";
const P5Wrapper = dynamic(() => import("src/P5Wrapper"), { ssr: false });
import { coordinates } from "src/sketches/structure/coordinates";
import { widthHeight } from "src/sketches/structure/width-height";
import { loop } from "src/sketches/structure/loop";
import { noLoop } from "src/sketches/structure/no-loop";
import { redraw } from "src/sketches/structure/redraw";
import { createGraphics } from "src/sketches/structure/create-graphics";

const Structure: NextPage = () => {
  return (
    <Layout>
      <Heading>Structure</Heading>

      <VStack align="start">
        <P5Wrapper sketch={coordinates} />
        <P5Wrapper sketch={widthHeight} />
        <P5Wrapper sketch={loop} />
        <P5Wrapper sketch={noLoop} />
        <P5Wrapper sketch={redraw} />
        <P5Wrapper sketch={createGraphics} />
      </VStack>
    </Layout>
  );
};

export default Structure;
