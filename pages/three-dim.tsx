import { VStack, Heading } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import { Layout } from "src/components/Layout";
const P5Wrapper = dynamic(() => import("src/P5Wrapper"), { ssr: false });
import { geometries } from "src/sketches/three-dim/geometries";
import { sineCosine } from "src/sketches/three-dim/sine-cosine";
import { multipleLights } from "src/sketches/three-dim/multiple-lights";

const ThreeDim: NextPage = () => {
  return (
    <Layout>
      <Heading>3D</Heading>

      <VStack align="start">
        <P5Wrapper sketch={geometries} />
        <P5Wrapper sketch={sineCosine} />
        <P5Wrapper sketch={multipleLights} />
      </VStack>
    </Layout>
  );
};

export default ThreeDim;
