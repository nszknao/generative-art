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
          <BreadcrumbLink isCurrentPage>Three.js</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading as="h1" size="lg" mb={4}>
        Three.js
      </Heading>

      <List spacing={3}>
        <ListItem textDecoration="underline">
          <Link href="/threejs/example">
            <a>threejs</a>
          </Link>
        </ListItem>
      </List>
    </Layout>
  );
};

export default Threejs;
