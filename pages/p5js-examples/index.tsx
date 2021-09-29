import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

import { Layout } from "src/components/Layout";

const P5jsExamples: NextPage = () => {
  return (
    <Layout>
      <Breadcrumb fontWeight="medium" fontSize="sm" mb={4}>
        <BreadcrumbItem>
          <Link href="/" passHref>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage>p5.js Examples</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading as="h1" size="lg" mb={4}>
        p5.js Examples
      </Heading>

      <List spacing={3}>
        <ListItem textDecoration="underline">
          <Link href="/p5js-examples/structure">
            <a>Structure</a>
          </Link>
        </ListItem>
        <ListItem textDecoration="underline">
          <Link href="/p5js-examples/three-dim">
            <a>3D</a>
          </Link>
        </ListItem>
      </List>
    </Layout>
  );
};

export default P5jsExamples;
