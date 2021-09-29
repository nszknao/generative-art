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
import { Example } from "src/threejs/example";

const Threejs: NextPage = () => {
  return (
    <Layout>
      <Breadcrumb fontWeight="medium" fontSize="sm" mb={4}>
        <BreadcrumbItem>
          <Link href="/" passHref>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/threejs" passHref>
            <BreadcrumbLink>Three.js</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage>example</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading as="h1" size="lg" mb={4}>
        Example
      </Heading>

      <Example />
    </Layout>
  );
};

export default Threejs;
