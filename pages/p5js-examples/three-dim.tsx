import { VStack, Heading } from "@chakra-ui/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Link from "next/link";

import { Layout } from "src/components/Layout";
const P5Wrapper = dynamic(() => import("src/P5Wrapper"), { ssr: false });
import { geometries } from "src/sketches/three-dim/geometries";
import { sineCosine } from "src/sketches/three-dim/sine-cosine";
import { multipleLights } from "src/sketches/three-dim/multiple-lights";
import { orbitControl } from "src/sketches/three-dim/orbit-control";

const ThreeDim: NextPage = () => {
  return (
    <Layout>
      <Breadcrumb fontWeight="medium" fontSize="sm" mb={4}>
        <BreadcrumbItem>
          <Link href="/" passHref>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/p5js-examples" passHref>
            <BreadcrumbLink>p5.js Examples</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage>3D</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading as="h1" size="lg" mb={4}>
        3D
      </Heading>

      <VStack align="start">
        <P5Wrapper sketch={geometries} />
        <P5Wrapper sketch={sineCosine} />
        <P5Wrapper sketch={multipleLights} />
        <P5Wrapper sketch={orbitControl} />
      </VStack>
    </Layout>
  );
};

export default ThreeDim;
