import { Heading, List, ListItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

import { Layout } from "src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading as="h1" size="lg" mb={4}>
        Like Generative Art
      </Heading>

      <List spacing={3}>
        <ListItem textDecoration="underline">
          <Link href="/p5js-examples">
            <a>p5.js Examples</a>
          </Link>
        </ListItem>
      </List>
    </Layout>
  );
};

export default Home;
