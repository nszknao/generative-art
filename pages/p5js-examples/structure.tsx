import { Heading, VStack } from "@chakra-ui/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Link from "next/link";

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
          <BreadcrumbLink isCurrentPage>Structure</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading as="h1" size="lg" mb={4}>
        Structure
      </Heading>

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
